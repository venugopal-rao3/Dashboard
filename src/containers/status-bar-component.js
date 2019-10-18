import React, {Component} from 'react';
import './status-bar-component.css';

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="status-bar-clearfix">
              <div className="container-fluid">
                <br /><br />
                <ul className="list-unstyled multi-steps">
                  <li className="is-active">Cart</li>
                  <li>Delivery Address</li>
                  <li>Payment Options</li>
                  <li>Order Confirmation</li>
                </ul>
              </div>
            </div>
         );
    }
}
 
export default StatusBar;