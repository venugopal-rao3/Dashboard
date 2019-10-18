import React, {Component} from 'react';
import Header from './header.container'
import Body from './body.container';
import Announcement from './../components/announcement-component'
import Sidebar from './../components/sidebar-component'
import { BrowserRouter as Router ,Route, Link, Switch } from "react-router-dom";
import ProductDetails from './product-details-component';
import CartItem from './cart-items-component';
import Order from "./order-successful-component"
const MainComponent = (props) => {
    return (
        <Router>
          <div>
          <Switch>
            <Route exact path ='/' >
              <Announcement />
              <Header/>
              <Sidebar />
              <Body/>
            </Route>
          </Switch>
              <Route exact path = '/product' component = {ProductDetails}></Route>
              <Route exact path = '/cart-item' component = {CartItem}></Route>
              <Route exact path = '/order' component = {Order}></Route>
          </div>

        </Router>
    );
}

export default MainComponent;