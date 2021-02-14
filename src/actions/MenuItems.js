const setMenuItem = (value) => {
  return {
    type: 'SET_MENU_ITEM',
    payload: value
  };
};


const setItemsOfTheDay = (value) => {
  return {
    type: 'SET_ITEMS_OF_THE_DAY',
    payload: value
  };
};

const addMenuItem = (value) => {
  return (dispatch) => {
    localStorage.setItem('menuItems', JSON.stringify(value));
    dispatch(getMenuItems());
  }
}

const updateMenuItemsQty = (name, qty) => {
  return (dispatch) => {
    let menuItems = localStorage.getItem('menuItems') ? JSON.parse(localStorage.getItem('menuItems')): [];
    menuItems = [...menuItems.filter(item => item.itemName === name ? item.itemQuantity -= qty : item.itemQuantity)];
    console.log(menuItems)
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
    dispatch(getMenuItems());
  }
}

const updateItemsOfTheQty = (name, qty) => {
  return (dispatch) => {
    let dailyItems = localStorage.getItem('dailyItems') ? JSON.parse(localStorage.getItem('dailyItems')): [];
    dailyItems = [...dailyItems.filter(item => item.itemName === name ? item.count -= qty : item.count)];
    console.log(dailyItems)
    localStorage.setItem('dailyItems', JSON.stringify(dailyItems));
    dispatch(getItemsOfTheDay());
  }
}


const addItemsOfTheDay = (value) => {
  // console.log(value)
  return (dispatch) => {
    // const {itemName, count} = value;
    localStorage.setItem('dailyItems', JSON.stringify(value));
    dispatch(getItemsOfTheDay());
    // dispatch(updateMenuItemsQty(itemName, count));
  }
}

const addItemsToBuy = (value) => {
  // console.log(value)
  return (dispatch) => {
    // const {itemName, count} = value;
    localStorage.setItem('itemsToBuy', JSON.stringify(value));
    // dispatch(getItemsToBuy());
    // dispatch(updateMenuItemsQty(itemName, count));
  }
}

const getMenuItems = () => {
  return (dispatch) => { 
    const menuItems = localStorage.getItem('menuItems') ? JSON.parse(localStorage.getItem('menuItems')): [];
    dispatch(setMenuItem(menuItems));
  }
}

const getItemsOfTheDay = () => {
  return (dispatch) => { 
    const itemsOfTheDay = localStorage.getItem('dailyItems') ? JSON.parse(localStorage.getItem('dailyItems')): [];
    console.log(itemsOfTheDay)
    dispatch(setItemsOfTheDay(itemsOfTheDay));
  }
}

// const addItemOfTheDay = (value) => {
//   return {
//     type: 'ADD_ITEM_OF_THE_DAY',
//     payload: value
//   };
// };

export {
  addMenuItem,
  // addItemOfTheDay,
  getMenuItems,
  addItemsOfTheDay,
  getItemsOfTheDay,
  updateMenuItemsQty,
  updateItemsOfTheQty,
  addItemsToBuy
}

