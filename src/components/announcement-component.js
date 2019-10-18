import React, {Component} from 'react';
import './announcement-component.css';

class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className = "announcement-wrapper">
              <p>Need Assistance?:</p>
              <span> Call Us : +91 99999 99999</span>
              <div className = "location-wrapper">
                <img src="/images/placeholder-5.svg" alt="location-pin" className="location-icon"/>
                <span>Bangalore
                  <img src="/images/shape.svg" alt="down-arrow" className="location-picker"/>
                </span>
              </div>
            </div>
         );
    }
}
 
export default Announcement;