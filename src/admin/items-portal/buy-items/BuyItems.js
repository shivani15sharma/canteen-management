import React, { Component, Fragment } from 'react';

export default class BuyItems extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemName: '',
      itemPrice: '',
      noOfItemsToBuy: '',
      availableQty: '',
      employeeID: '',
      empIdErr: false,
      itemsArr: [],
      total: 0
    }
  }

  componentDidMount() {
    this.props.getItemsOfTheDay();
    this.props.getEmployeeDetails();
    // this.props.getitemsToPurchase();
  }

  handleOptionChange = (e) => {
    const { itemsOfTheDayList: {itemsOfTheDay}} = this.props;
    const itemName = e.target.value;
    const item = itemsOfTheDay.find(item => item.itemName === itemName);
    console.log(item)
    this.setState({
      itemName: item.itemName,
      itemPrice: item.itemPrice,
      availableQty: item.count
    });
  }

  handleNumberOfItems = (e) => {
    // const item = 
    this.setState({
      noOfItemsToBuy: e.target.value
    });
  }

  handleEmployeeID = (e) => {
    this.setState({
      employeeID: e.target.value
    })
  }

  handleAddItem = () => {
    const { itemName, itemPrice, noOfItemsToBuy, itemsArr } = this.state;
    // const { itemsToPurchaseList: {items}} = this.props;
    // this.props.addItemsToPurchase([...items, {itemName, itemPrice, noOfItemsToBuy}]);
    this.setState((prevState) => {return {
      availableQty: '',
      noOfItemsToBuy: '',
      total: prevState.total + noOfItemsToBuy*itemPrice,
      itemsArr: [...itemsArr, {itemName, noOfItemsToBuy, itemsPrice: noOfItemsToBuy*itemPrice}]
    }})
  }

  checkEmpIdExist = (e) => {
    const { employeesList: {employees} } = this.props;
    console.log(e.target.value)
    console.log(employees)
    const selectedEmp = employees.find(emp => emp.employeeID == e.target.value);
    console.log(selectedEmp)
    !selectedEmp ? this.setState({
      empIdErr: true
    })
    : 
    this.setState({
      empIdErr: false
    })
  }

  handlePay = () => {
    const { itemName, noOfItemsToBuy, employeeID , total} = this.state;
    const { employeesList: {employees} } = this.props;
    const selectedEmp = employees.find(emp => emp.employeeID == employeeID);
    selectedEmp.balance -=  total;
    console.log(selectedEmp)
    this.props.updateEmployee(selectedEmp)
    // this.props.updateItemsOfTheQty(itemName, noOfItemsToBuy);
  }

  render(){
    const { itemName, itemPrice, availableQty, noOfItemsToBuy, employeeID, empIdErr, itemsArr, total } = this.state;
    const { itemsOfTheDayList: {itemsOfTheDay},
    // itemsToPurchaseList: {items}
  } = this.props;
  console.log(itemsArr)
    const disableAdd = (itemName === 'Select Item' || itemName === '') || (noOfItemsToBuy === '' || noOfItemsToBuy < 0);
    return(<Fragment>
      <h1>Purchase Items</h1>
      {
        itemsOfTheDay.length > 0 ?
        <Fragment>
          <h4>Add Items to be purchased</h4>
          <div className='pad-1'>
          <span>Employee ID</span>
          <input type='text' value={employeeID} onChange={this.handleEmployeeID} onBlur={this.checkEmpIdExist}></input>
        </div>
          <div className='pad-1'>
            <span>Select Item to be added:</span>
            <select onChange={this.handleOptionChange}>
              <option>Select Item</option>
              {
                itemsOfTheDay.map((item)=><option>{item.itemName}</option>)
              }
            </select>
          </div>
          <div className='pad-1'>
            <span>Enter no of items</span>
            <input type='number' value={noOfItemsToBuy} onChange={this.handleNumberOfItems}></input>
            {availableQty && <p className='warn'>Available Quantity {availableQty}</p>}
            {empIdErr && <p className='warn'>EmployeeId does not exist</p>}
          </div>
          <div className='pad-1'> 
            <input type='button' disabled={disableAdd || empIdErr} value='Add Item' onClick={this.handleAddItem}></input>
          </div>
          <table className='center pad-4'>
            <thead>
              <tr><th>Item Name</th><th>Item Price</th><th>Item Quantity</th></tr>
            </thead>
            <tbody>
              {
                itemsArr.map((item, i) => <tr key={i}>
                  <td>{item.itemName}</td>
                  <td>{item.itemsPrice}</td>
                  <td>{item.noOfItemsToBuy}</td>
                </tr>)
              }
            </tbody>
          </table>
          <p>Total Price: {total}</p>
          <input type='button' value='Pay' onClick={this.handlePay} ></input>
        </Fragment>
        :
        <div>Please add menu items first!!!!</div>
      }
      
    </Fragment>)
  }
}