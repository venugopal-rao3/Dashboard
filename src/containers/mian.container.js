import React, {Component} from 'react';
import Header from './header.container'
import Sidebar from './sidebar.container';
import Body from './body.container';

const MainComponent = (props) => {
    return ( 
        <div>
            <Sidebar></Sidebar>
            <Header/>
            <Body/>
        </div>
    );
}

export default MainComponent;