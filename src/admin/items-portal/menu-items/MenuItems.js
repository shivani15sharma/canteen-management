import { render } from '@testing-library/react';
import React, { Component, Fragment } from 'react';

export default class MenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemPrice: '',
      itemQuantity: ''
    }
  }

  componentDidMount() {
    this.props.getMenuItems();
  }

  handleItemName = (e) => {
    this.setState({
      itemName: e.target.value
    });
  }

  handleItemPrice = (e) => {
    this.setState({
      itemPrice: e.target.value
    });
  }

  handleItemQuantity = (e) => {
    this.setState({
      itemQuantity: e.target.value
    });
  }

  handleAddItem = () => {
    const { itemName, itemPrice, itemQuantity } = this.state;
    const  { menuItemsList: {menuItems} } = this.props;
    if(itemName.length) {
      this.props.addMenuItem([...menuItems, { itemName, itemPrice, itemQuantity }]);
      this.setState({
        itemName: '',
        itemPrice: '',
        itemQuantity: ''
      })
    }
  }

  render(){
    const { itemName, itemPrice, itemQuantity } = this.state;
    const { menuItemsList: {menuItems} } = this.props || [];
    return(<Fragment>
      <h1>
        Menu Items
      </h1>
      <h4>Add Menu Item</h4>
      <div className='pad-1'>
        <span>Enter menu item: </span><input type='text' value={itemName} onChange={this.handleItemName}></input>
      </div>
      <div className='pad-1'>
        <span>Enter item price: </span><input type='text' value={itemPrice} onChange={this.handleItemPrice}></input>
      </div>
      <div className='pad-1'>
        <span>Enter item quantity: </span><input type='text' value={itemQuantity} onChange={this.handleItemQuantity}></input>
      </div>
      <div className='pad-1'>
        <input type='button' value='Add Item' onClick={this.handleAddItem}></input>
      </div>
      <table className='center pad-4'>
        <thead>
          <tr><th>Item Name</th><th>Item Price</th><th>Item Quantity</th></tr>
        </thead>
        <tbody>
          {
            menuItems.map((item, i) => <tr key={i}>
              <td>{item.itemName}</td>
              <td>{item.itemPrice}</td>
              <td>{item.itemQuantity}</td>
            </tr>)
          }
        </tbody>
      </table>
    </Fragment>)
  }
}