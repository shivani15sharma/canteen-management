const defaultMenuSchema = {employees: []};

export default (state = defaultMenuSchema, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEE':
      return {...state, employees: action.payload};
    default:
      return state;
  }
};

