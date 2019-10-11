import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './device-details-body-component.css'

const DeviceDetailsBody = (props) => {
    const sample = {name: "venu"}
    return (
        <div>

        <div className="device-details-body">
            <h4>Hardware Details</h4>
            <label className="device-body-label">Mac address</label>
            <p className="device-body-value">xx:xx:xx:23</p>
            <label className="device-body-label"> Device model</label>
            <p className="device-body-value">ap21D</p>
            <label className="device-body-label">Firmware</label>
            <p className="device-body-value">v2.02.2</p>
            <div className="device-inline">
                <label className="device-body-label">Uptime</label>
                <p className="device-body-value">99.28%</p>
                <label className="device-body-label Health-status">Device Health</label>
                <p className="device-body-value Health-status">Good</p>
            </div>
            <label className="device-body-label">IP Address</label>
            <p className="device-body-value">176.10.0.10</p>
            <div className="progress-container">
                <label>CPU usage</label>
                <ProgressBar variant="warning" now={23}/>
                <span>23.4%</span>
            </div>
            <div className="progress-container">
                <label>CPU usage</label>
                <ProgressBar variant="info" now={40}/>
                <span>23.4%</span>
            </div>
            <label className="device-body-label">clients</label>
            <p className="device-body-value">H2_921A</p>
            <label className="device-body-label">Added on</label>
            <p className="device-body-value">13 Jul 2019</p>

        </div>
        <div className="Device-details-footer">
            <h4>Hardware details</h4>
            <div className="progress-container">
                <label>Download Speed</label>
                <ProgressBar variant="warning" now={90}/>
                <span>23.4 MBPS</span>
            </div>
            <div className="progress-container">
                <label>Upload Speed</label>
                <ProgressBar variant="info" now={50}/>
                <span>23.4 MBPS</span>
            </div>
        </div>
        </div>
    )
}

export default DeviceDetailsBody;