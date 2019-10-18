import React, { Component } from 'react';
import './body.container.css';

//component imports
import  DeviceDetails from './device-details-component';
import PageDetails from './page-details-component'
import PageHeader from './page-header.container';
class body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="body-wrapper">
                <PageHeader/>
                <DeviceDetails/>
                <PageDetails/>
            </div>
         );
    }
}
 
export default body;