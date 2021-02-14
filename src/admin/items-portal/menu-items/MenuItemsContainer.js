import {connect} from 'react-redux';
import {addMenuItem, getMenuItems} from '../../../actions/MenuItems';
import MenuItems from './MenuItems';

const mapStateToProps = (state) => {
  return {
    menuItemsList: state.itemsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMenuItem: (item) => {
      dispatch(addMenuItem(item));
    },
    getMenuItems: () => dispatch(getMenuItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems)