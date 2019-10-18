import React, {Component} from 'react';
import  HeaderStatusDropdown  from '../components/header-status-dropdown-component';
import  UserProfile  from './../components/user-profile-component';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const HeaderStatusDropdownData = [
            {image: 'wifi',title: "System Status",options:["Healthy", "Offline", "Maintainence"]},
            {image: 'doller',title: "Todays spends",options:["$42.20", "Greater than $5", "Greater than $10"]},
            {image: 'Location',title: "Location",options:["Coffee Hut Gachiboli", "select-2", "select-3"]}
        ]
        return ( 
            <header className="main-header">
                <div className="brand"><h2>Open <span>Wifi</span></h2></div>
                <div className="side-menu-container">
                    {
                        HeaderStatusDropdownData.map( i => {
                            return <HeaderStatusDropdown title={i.title} image={i.image} options={i.options}/>
                        }
                           
                        )
                    }
                    <UserProfile/>
                </div>
            </header>
         );
    }
}
 
export default Header;