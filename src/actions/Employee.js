const addEmployee = (value) => {
  return (dispatch) => {
    localStorage.setItem('employees', JSON.stringify(value));
    dispatch(getEmployeeDetails());
  }
}

const setEmployee = (value) => {
  return {
    type: 'SET_EMPLOYEE',
    payload: value
  };
};

const getEmployeeDetails = () => {
  return (dispatch) => {
    const employees = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')): [];
    console.log(employees)
    dispatch(setEmployee(employees));
  }
}


const updateEmployee = (employee) => {
  return (dispatch) => {
    let employeeList = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')): [];
    console.log(employee)
    console.log("######",employeeList)
    employeeList = [...employeeList.filter(emp => emp.employeeID == employee.employeeID ? employee : emp)];
    console.log("######",employeeList)
  }
}

export {
  addEmployee,
  getEmployeeDetails,
  updateEmployee
}
