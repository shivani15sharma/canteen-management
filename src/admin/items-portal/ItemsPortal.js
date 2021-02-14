import React, { Component, Fragment } from 'react';
import {Route, Redirect, withRouter, Link} from 'react-router-dom';
import ItemsOfTheDayContainer from './items-of-day/ItemsOfTheDayContainer';
import MenuItemsContainer from './menu-items/MenuItemsContainer';
import BuyItemsContainer from './buy-items/BuyItemsContainer';

export default class ItemsPortal extends Component {
  render(){
    const {match: {url}} = this.props;
    const activeTab = window.location.href.split('/')[5];
    return(<Fragment>
      {activeTab === 'menu-items'
       ? 
       <Link to={`${url}`} className='menu-item'>Items of the day</Link>
       :
       <Link to={`${url}/menu-items`} className='menu-item'>Menu Items</Link>
      }
      <Link to={`${url}/buy-items`} className='menu-item'>Purchase Items</Link>
      <Route exact path={`${url}/`} component={ItemsOfTheDayContainer}/>
      <Route exact path={`${url}/menu-items`} component={MenuItemsContainer}/>
      <Route exact path={`${url}/buy-items`} component={BuyItemsContainer}/>
    </Fragment>)
  }
}