import React, { Component, Fragment } from 'react';
import {Route, Redirect, withRouter, Link} from 'react-router-dom';
import AddEmployeeContainer from './add-employee/AddEmployeeContainer';

export default class EmployeePortal extends Component {
  render(){
    const {match: {url}} = this.props;
    const activeTab = window.location.href.split('/')[5];
    return(<Fragment>
      <Route exact path={`${url}/`} component={AddEmployeeContainer}/>
    </Fragment>)
  }
}