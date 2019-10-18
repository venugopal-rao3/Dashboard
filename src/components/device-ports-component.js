import React from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import './device-ports-component.css'

const DevicePorts = (props) => {
    let items = [];
    let active = 3;
    
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    
    return (
        <div>
            <h3>{props.devicename}</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th><input type="checkbox"/></th>
                        {
                        props.headers.map((data) => {
                        return <td>{data}</td>
                        })
                        }
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"/></td>
                    {
                    props.details.map((data) => {
                    if(data =="Up"){
                    return <th><span className="status">{data}</span></th>
                    }
                    else if(data == "Disable") {
                        return <th><button className="btn btn-danger">{data}</button></th>
                    }
                    else {
                    return <th>{data}</th>
                    } 
                    })
                    }
                    <td>...</td>
                </tr>
                <tr>
                    <td><input type="checkbox"/></td>
                    {
                    props.details.map((data) => {
                    if(data =="Up"){
                    return <th><span className="status">{data}</span></th>
                    }
                    else if(data == "Disable") {
                        return <th><button className="btn btn-danger">{data}</button></th>
                    }
                    else {
                    return <th>{data}</th>
                    } 
                    })
                    }
                    <td>...</td>
                </tr>
            </tbody>
            </Table>
            <div className="table-footer-content">
                <label className="shown-devices">Showing 03/03 forwards</label>
                <Pagination>{items}</Pagination>
                <label className="pagination-per-page">10 per page</label>

            </div>

    </div>
    )
}

export default DevicePorts;