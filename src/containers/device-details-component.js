import React, { Component} from 'react';
import './device-details-component.css';


//component imports 
import DeviceDetailsHeader from './../components/device-details-header-component';
import DeviceDetailsbody from './../components/device-details-body-component';

class DeviceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="device-details-container">
                <DeviceDetailsHeader deviceName="OpenWIFI Gateway xs3" deviceStatus="true"/>
                <DeviceDetailsbody/>
            </div>
         );
    }
}
 
export default DeviceDetails;