import React, { Component } from 'react';
import "./product-details-component.css";
import Announcement from "./../components/announcement-component";
import Header from './header.container';
import DateRangePicker from './datepicker-component';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
import CartItem from './cart-items-component';
class ProductDetails extends Component {
  render () {  
    const price_array = [500,630,1500];
    return (
        <div>
          <Announcement />
          <Header />
          <div className = "product-details-container">
            <div className = "details-wrapper">
              <div className = "device-details">
                <div className = "image-container">
                  <img src="/images/laptop-front-face.jpg" alt="laptop-front-face-image" className="laptop-front-face"/>
                </div>
                <div className = "secondory-details">
                  <div className = "name-description">
                    <h1>MacBook Pro 16 GB RAM</h1>
                    <p> Apple MacBook Pro i7 on Rent MGXC2LL/A with 16 GB RAM, 512 GB HDD and 15.4-Inch Retina Display(Old Version) Laptop available for rent in Bangalore</p>
                    </div> 
                    <div className= "price-wrapper-details-page">
                      <p>Rent Details</p>
                      {price_array.map(function(value, index){
                              if (value == 500)
                                return <a key={ index }>₹{value}/day </a>;
                              else if (value == 630)
                                return <a key={ index }>₹{value}/week </a>;
                              else
                                return <a key={ index }>₹{value}/month </a>;

                            })}
                      </div>
                      <div className = "refundable-deposit">
                        <p> Refundable Deposit </p>
                        <span>₹2000/Unit</span>
                      </div>
                    <div className = "delivery-pickup">
                      <p> Delivery & Pickup </p>
                      <span>₹600</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className = "product-selection-container">
                <div className = "inner-product-selection">
                  <div className = "quantity-age-selection">
                    <div className = "quantity">
                      <p>Quantity</p>
                      <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <span>Only 5 left in stock</span>
                    </div>
                    <div className = "age-selection">
                      <p>Select age Group</p>
                      <select>
                        <option value="1-2 years">1-2 years</option>
                        <option value="2-3 years">2-3 years</option>
                        <option value="3-4 years">3-4 years</option>
                        <option value="4-5 years">4-5 years</option>
                        <option value="5-6 years">5-6 years</option>
                      </select>
                    </div>
                  </div>
                  <p class = "Booking">Start Booking</p>
                    <DateRangePicker />
                    <div className = "add-to-cart-wrapper">
                    <Link  to = "/cart-item" className = "add-to-cart"> Add to Cart </Link>
                    </div>
                  </div>
            </div>
          </div>
        </div>
    )
  }
}
export default ProductDetails;