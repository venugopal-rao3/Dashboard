import React, { Component } from 'react';
import './sidebar.css';
import  Icon  from './../components/Icons';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      const urls = ["sidebar_icon0", "sidebar_icon1", "sidebar_icon2", "sidebar_icon3", "sidebar_icon4", "sidebar_icon5", "sidebar_icon6", "sidebar_icon7", "sidebar_icon8", "sidebar_icon9", "sidebar_icon10"];
        return ( 
            <section className="sidebar">
               {
                urls.map( (url) => {
                  const full_url = "./images/" + url + '.svg';
                  return (<Icon source={full_url}/>);
                } )
               }
            </section>
         );
    }
}
 
export default Sidebar;