import React, { Component, Fragment } from 'react';
import {Route, Redirect, Link} from 'react-router-dom';
import ItemsPortal from './items-portal/ItemsPortal';
import EmployeePortal from './employee-portal/EmployeePortal';

export default class Admin extends Component {
  render() {
    const {match: {url}} = this.props;
    const activeTab = window.location.href.split('/')[4];
    return(<Fragment>
        <Link to={`${url}/items-portal`} className={`navigation ${activeTab == 'items-portal' ? 'active' : ''}`}>Items Portal</Link>
        <Link to={`${url}/employee-portal`} className={`navigation ${activeTab == 'employee-portal' ? 'active' : ''}`}>Employee Portal</Link>
      <Route path={`${url}/items-portal`} component={ItemsPortal}/>
      <Route path={`${url}/employee-portal`} component={EmployeePortal}/>
      {/* <Redirect from='/admin' to={`${url}/items-portal`}></Redirect> */}
    </Fragment>)
  }
}