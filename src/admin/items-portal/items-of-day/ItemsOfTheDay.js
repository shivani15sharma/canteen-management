import React, { Component, Fragment } from 'react';

export default class ItemsOfTheDay extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemName: '',
      itemPrice: '',
      count: '',
      availableQty: ''
    }
  }

  componentDidMount() {
    this.props.getMenuItems();
    this.props.getItemsOfTheDay();
  }

  handleOptionChange = (e) => {
    const { menuItemsList: {menuItems}} = this.props;
    const itemName = e.target.value;
    const item = menuItems.find(item => item.itemName === itemName);
    this.setState({
      itemName: item.itemName,
      itemPrice: item.itemPrice,
      availableQty: item.itemQuantity
    });
  }

  handleNumberOfItems = (e) => {
    // const item = 
    this.setState({
      count: e.target.value
    });
  }

  handleAddItem = () => {
    const { itemName, itemPrice, count } = this.state;
    const { itemsOfTheDayList: {itemsOfTheDay}} = this.props;
    this.props.addItemsOfTheDay([...itemsOfTheDay, {itemName, itemPrice, count}]);
    this.props.updateMenuItemsQty(itemName, count);
  }

  render(){
    const { itemName, itemPrice, availableQty, count } = this.state;
    const { menuItemsList: {menuItems}, itemsOfTheDayList: {itemsOfTheDay}} = this.props;
    const disableAdd = (itemName === 'Select Item' || itemName === '') || (count === '' || count < 0);
    return(<Fragment>
      <h1>Items of the day</h1>
      {
        menuItems.length > 0 ?
        <Fragment>
          <h4>Add Menu Item</h4>
          <div className='pad-1'>
            <span>Select Item to be added:</span>
            <select onChange={this.handleOptionChange}>
              <option>Select Item</option>
              {
                menuItems.map((item)=><option>{item.itemName}</option>)
              }
            </select>
          </div>
          <div>
            <span>Enter no of items</span>
            <input type='number' value={count} onChange={this.handleNumberOfItems}></input>
            {availableQty && <span>Available Quantity {availableQty}</span>}
          </div>
          <div className='pad-1'> 
            <input type='button' disabled={disableAdd} value='Add Item' onClick={this.handleAddItem}></input>
          </div>
          <table className='center pad-4'>
            <thead>
              <tr><th>Item Name</th><th>Item Price</th><th>Item Quantity</th></tr>
            </thead>
            <tbody>
              {
                itemsOfTheDay.map((item, i) => <tr key={i}>
                  <td>{item.itemName}</td>
                  <td>{item.itemPrice}</td>
                  <td>{item.count}</td>
                </tr>)
              }
            </tbody>
          </table>
        </Fragment>
        :
        <div>Please add menu items first!!!!</div>
      }
      
    </Fragment>)
  }
}