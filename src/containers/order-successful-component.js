import React, {Component} from 'react';
import './order-successful-component.css';
import Announcement from "./../components/announcement-component";
import Header from './header.container';
import StatusBar from './status-bar-component'

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="order-successful-clearfix">
              <Announcement />
              <Header />
              <StatusBar />
              <div className = "order-successfull-wrapper">
                <img src="/images/confirm.svg" alt="order-confirm" className="order-confirm-image"/>
                <h1>Order Placed Succesfully!</h1>
                <p>Order Number is 
                  <span> FGU805PK5 </span>
                </p>
                <p className = "hint">You will recieve a confirmation e-mail shortly.</p>
              </div>
              <div className = "order-clearfix">
                <div className = "main-order-clearfix">
                  <div className = "delivery-address">
                    <h1>
                      <img src="/images/icons8-home.svg" alt="home" className="home-icon"/>
                      Delivery Adress
                    </h1>
                    <p>Jason Doe </p>
                    <p>#B61, MJR PLATINA, Kudlu Gate,</p>
                    <p>Industrial layout, Begur,</p>
                    <p>Bangalore-560068, Karnataka</p>
                    <p>Mobile:  
                      <span>9567035955</span>
                    </p>
                  </div>
                  <div className = "payment-details">
                    <h1>
                      <img src="/images/credit-card.svg" alt="credit-card" className="credit-card-icon"/>
                      payment Details
                    </h1>
                    <p>
                      Total Amount -
                      <span>₹10400</span>
                    </p>
                    <p>
                      Payment Method -
                      <span>Axis Debit Card</span>
                    </p>
                    <p>
                      Payment Status -
                      <span>Paid</span>
                    </p>
                  </div>
                  <div className = "order-delivery-notes">
                    <h1>
                      <img src="/images/notepad.svg" alt="notepad" className="notepad-icon"/>
                      Delivery Notes
                    </h1>
                    <textarea rows="6" cols="25" name="notes" placeholder = "Please take care of the item it is fragile"/>
                  </div>
                </div>
              </div>
              <div className ="order-details-wrapper">
                <div className ="order-details-heading">
                  <ul>
                    <li>Sl.No</li>
                    <li>Order No</li>
                    <li>Product details</li>
                    <li>Rental Period</li> 
                    <li>Total Rent</li> 
                  </ul>
                </div>
                <div className ="order-item-details">
                  <ul>
                    <li>1</li>
                    <li>37287889927</li>
                    <li>Macbook Pro 16 GB RAM</li>
                    <li>6 Dec’ 17 - 12 Dec’ 17 </li> 
                    <li>₹10400</li> 
                  </ul>
                </div>
                <div className = "quantity-size-wrapper">
                  <p>
                    Quantity:
                    <span>2</span>
                  </p>
                  <p>
                    Size:
                    <span>13inch</span>
                  </p>
                </div>
                <div className = "go-to-myorder-wrapper">
                  <a href = "" className = "goto-order"> Go to My Order</a>
                </div>
              </div>
            </div>
         );
    }
}
 
export default Order;