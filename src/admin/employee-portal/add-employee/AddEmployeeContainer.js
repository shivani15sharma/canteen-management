import {connect} from 'react-redux';
import {addEmployee, getEmployeeDetails} from '../../../actions/Employee';
import AddEmployee from './AddEmployee';

const mapStateToProps = (state) => {
  return {
    employeesList: state.employeeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEmployee: (emp) => {
      dispatch(addEmployee(emp));
    },
    getEmployeeDetails: () => dispatch(getEmployeeDetails())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee)