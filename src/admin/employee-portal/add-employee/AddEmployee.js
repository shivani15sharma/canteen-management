import React, { Component, Fragment } from 'react';

export default class AddEmployee extends Component {
  constructor() {
    super();
    this.state = {
      employeeName: '',
      employeeID: '',
      balance: 0,
      addAmountFlag: false,
      empId: '',
      empIdErr: '',
      amount: ''
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.props.getEmployeeDetails();
  }

  handleEmployeeName = (e) => {
    this.setState({
      employeeName: e.target.value
    })
  }

  handleEmployeeID = (e) => {
    this.setState({
      employeeID: e.target.value
    })
  }

  handleBalanceCheck = (id) => {
    console.log(id)
    const { employeesList: {employees} } = this.props;
    const selectedEmp = employees.find(emp => emp.employeeID === id);
    console.log(selectedEmp)
    alert(selectedEmp.balance);
  }

  handleAddEmployee = () => {
    const { employeesList: {employees} } = this.props;
    const { employeeName, employeeID, balance } = this.state;
    this.props.addEmployee([...employees, {employeeName, employeeID, balance} ]);
    this.setState({
      employeeName: '',
      employeeID: ''
    });
  }

  handleToggle = () => {
    this.setState((prevState) => {
      return{
        addAmountFlag: !prevState.addAmountFlag
      }
    });
  }

  handleAmount = (e) => {
    this.setState({
      amount: e.target.value
    });
  }

  handleEmpID = (e) => {
    this.setState({
      empId: e.target.value
    })
  }

  handleAddBalance = () => {
    const {empId,amount} = this.state;
    const { employeesList: {employees} } = this.props;
    const selectedEmp = employees.find(emp => emp.employeeID === empId);
    if(selectedEmp){
      selectedEmp.balance = amount;
      const updatedEmpList = employees.map(emp => emp.employeeID === emp ? selectedEmp : emp);
      this.props.addEmployee(updatedEmpList);
      this.setState({
        empIdErr: ''
      })
    } else {
      this.setState({
        empIdErr: 'Emp Id does not exist',
        empId: '',
        amount: ''
      })
    }
  }

  render(){
    const {employeeName, employeeID, addAmountFlag, empId, amount, empIdErr} = this.state;
    const { employeesList: {employees} } = this.props;
    return(<Fragment>
      {
        addAmountFlag
        ? 
        <Fragment>
          <input type='button' value='Add Employee' className='menu-item' onClick={this.handleToggle}></input>
          <h3>Add Money to Employee Account</h3>
          <div className='pad-1'>
            <span>Employee ID</span>
            <input type='text' value={empId} onChange={this.handleEmpID} ></input>
          </div>
          <div className='pad-1'>
            <span>Amount to add</span>
            <input type='text' value={amount} onChange={this.handleAmount} ></input>
          </div>
          <div>
            <input type='button' value='Add Balance' onClick={this.handleAddBalance} ></input>
          </div>
          <p className='warn'>{empIdErr}</p>
        </Fragment>
        :
        <Fragment>
        <input type='button' value='Add Balance' className='menu-item' onClick={this.handleToggle}></input>
        <h3>Add Employee</h3>
        <div className='pad-1'>
          <span>Employee Name</span>
          <input type='text' value={employeeName} onChange={this.handleEmployeeName} ></input>
        </div>
        <div className='pad-1'>
          <span>Employee ID</span>
          <input type='text' value={employeeID} onChange={this.handleEmployeeID} ></input>
        </div>
        <div>
          <input type='button' value='Add Employee' onClick={this.handleAddEmployee} ></input>
        </div>
        </Fragment>
      }
      {
        employees.length > 0 && <table className='center pad-4'>
        <thead>
          <tr><th>Employee Name</th><th>Employee ID</th> <th>Check Balance</th></tr>
        </thead>
        <tbody>
          {
            employees.map((emp, i) => <tr key={i}>
              <td>{emp.employeeName}</td>
              <td>{emp.employeeID}</td>
              <td><input type='button' value='Check Balance' onClick={() => this.handleBalanceCheck(emp.employeeID)}></input></td>
            </tr>)
          }
        </tbody>
      </table>
      }
    </Fragment>)
  }
}