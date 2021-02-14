const defaultMenuSchema = {menuItems: [], itemsOfTheDay: []};

export default (state = defaultMenuSchema, action) => {
  switch (action.type) {
    case 'SET_MENU_ITEM':
      return {...state, menuItems: action.payload};
    case 'SET_ITEMS_OF_THE_DAY':
        return {...state, itemsOfTheDay: action.payload};
    default:
      return state;
  }
};