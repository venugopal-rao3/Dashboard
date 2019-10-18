import React, {Component} from 'react';
import Announcement from "./../components/announcement-component";
import Header from './header.container';
import './cart-items-component.css'
import StatusBar from "./status-bar-component";
import { BrowserRouter as Router ,Route, Link, Switch } from "react-router-dom";


class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="cart-item-clearfix">
              <Announcement />
              <Header />
              <StatusBar />
              <div className = "cart-item-total-rent">
                <p>My Cart - 
                  <span> 1 items </span>
                </p>
                <p className = "rent"> Total Rent: 
                  <span> ₹6000 </span>
                </p>
              </div>
              <div className = "delivery-notes">
                <p>Delivery Notes</p>
                <a>Add any Delivery notes</a>
              </div>
              <div className = "cart-summary">
                <img src="/images/laptop-tile.jpg" alt="cart-item-tile" className="cart-item-clearfix"/>
                <div className = "name-quantity">
                  <h1>Macbook Pro 16 GB RAM</h1>
                  <p>quantity:
                  <span>2</span></p>
                </div>
                <div className = "cart-refund">
                  <p> Refundable Deposit </p>
                  <p> ₹4000 </p>
                  <p> Rental Period </p>
                  <p>6 Dec’17 - 12 Dec’17 </p>
                </div>
                <div className = "cart-delivery">
                  <p> Delivery & Pickup </p>
                  <p>₹600</p>
                  <p>Days</p>
                  <p>7</p>
                </div>
                <div className = "rent-wrapper">
                  <p>Rent</p>
                  <p>₹6000</p>
                </div>
              </div>


              <div className = "rent-summary">
                <div className = "rent-summary-wrapper">
                  <h1> Rent Summary</h1>
                  <ul>
                    <li>
                      <em>Total</em>
                      <strong>
                        ₹6000
                      </strong>
                    </li>
                    <li>
                      <em>Total Refundable Deposit</em>
                      <strong>
                        ₹4000
                      </strong>
                    </li>
                    <li>
                      <em>Delivery & Pickup</em>
                      <strong>
                        ₹600
                      </strong>
                    </li>
                    <li>
                      <em>Discount</em>
                      <strong className ="green-font">
                        -₹100
                      </strong>
                    </li>
                    <li>
                      <em>
                      <img src="/images/square-check.svg" alt="checkbox" className="checkbox-wrapper"/>
                      Loyalty Points
                      <img src="/images/warning-copy-2.svg" alt="warning" className="warning-wrapper"/>
                      </em>
                      <span>You can use max 200 points</span>
                      <strong className ="green-font">
                        -₹100
                      </strong>
                    </li>
                    <li>
                      <em>Have any Coupon?</em>
                      <a className = "coupon-code">
                        Enter Code here
                      </a>
                    </li>
                    <li>
                      <em className = "total-payable-amount">Total Payable Amount</em>
                      <strong className ="green-bold-font">
                        ₹10400
                      </strong>
                    </li>
                    <a className = "hide-details">Hide details</a>
                    <div className = "checkout-wrapper">
                      <Link  to = "/order" className = "checkout-link"> Checkout </Link>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
         );
    }
}
 
export default CartItem;