import React, { Component } from 'react';
import './page-details-component'
import './page-details-component.css'

//component imports 
import DevicePorts from './../components/device-ports-component';

class PageDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {
        const details = ["Ethernet 1", "99.88%", "Up", "192.168.1.1", "PPoE"] ;
        const details2 = ["Ethernet 1", "99.88%", "Up", "192.168.1.1", "Default group"] ;
        const details3 = ["Ethernet 1", "99.88%", "Up", "192.168.1.1", "Disable"] ;
        const headers = ["NAME", "UPTIME", "STATUS", "IP ADDRESS", "CONNECTION TYPE", ""];
        const headers2 = ["NAME", "UPTIME", "STATUS", "IP ADDRESS", "LAN GROUP", ""];
        const headers3 = ["NAME", "UPTIME", "STATUS", "IP ADDRESS", "ACTION", ""];
        const name1 = "WAN Ports"
        const name2 = "LAN Ports"
        const name3 = "Intranet Ports"
        return ( 
            <div className="device-page-details">
                <DevicePorts details={details} headers={headers} devicename={name1}/>
                <DevicePorts details={details2} headers={headers2} devicename={name2}/>
                <DevicePorts details={details3} headers={headers3} devicename={name3}/>
            </div>
         );
    }
}
 
export default PageDetails;