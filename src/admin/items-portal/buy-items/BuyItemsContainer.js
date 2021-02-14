import {connect} from 'react-redux';
import {addItemsToBuy, getMenuItems, getItemsOfTheDay, updateItemsOfTheQty} from '../../../actions/MenuItems';
import {getEmployeeDetails, updateEmployee} from '../../../actions/Employee';
import BuyItems from './BuyItems';

const mapStateToProps = (state) => {
  return {
    menuItemsList: state.itemsReducer,
    itemsOfTheDayList: state.itemsReducer,
    employeesList: state.employeeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemsToBuy: (item) => {
      dispatch(addItemsToBuy(item));
    },
    getItemsOfTheDay: () => dispatch(getItemsOfTheDay()),
    getMenuItems: () => dispatch(getMenuItems()),
    getEmployeeDetails: () => dispatch(getEmployeeDetails()),
    updateItemsOfTheQty: (itemName, qty) => dispatch(updateItemsOfTheQty(itemName, qty)),
    updateEmployee: (emp) => dispatch(updateEmployee(emp))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyItems)