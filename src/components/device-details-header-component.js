import React, { Component } from 'react';
import './device-details-header-component.css';
import Online from './online';
import Offline from './offline';


const DeviceDetailsHeader = (props) => {
    return (
        <div className="device-details-header">
            <img src="/images/Group 4 Copy.svg" alt="router-device-image" className="router-device-image"/>
            <h3>{props.deviceName}</h3>
    <p className="Device-detail-status">{ (props.deviceStatus == 'true')  ? <Online/>:<Offline/>}</p>
        </div>
    )
}

export default  DeviceDetailsHeader;