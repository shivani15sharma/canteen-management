import {connect} from 'react-redux';
import {addItemsOfTheDay, getMenuItems, getItemsOfTheDay, updateMenuItemsQty} from '../../../actions/MenuItems';
import ItemsOfTheDay from './ItemsOfTheDay';

const mapStateToProps = (state) => {
  return {
    menuItemsList: state.itemsReducer,
    itemsOfTheDayList: state.itemsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemsOfTheDay: (item) => {
      dispatch(addItemsOfTheDay(item));
    },
    getItemsOfTheDay: () => dispatch(getItemsOfTheDay()),
    getMenuItems: () => dispatch(getMenuItems()),
    updateMenuItemsQty: (itemName, qty) => dispatch(updateMenuItemsQty(itemName, qty))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsOfTheDay)