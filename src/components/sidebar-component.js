import React, {Component} from 'react';
import './sidebar-component.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      const category_array = ["Tools on Rent","Medical Supplies","Office Equipment","Kids Costume","Event Rentals","Apparel & Jewellery","Bedding"]
        return ( 
            <div className="side-bar">
              <h1> Categories</h1>
              <li className = "category-elements">
                {category_array.map(function(name, index){
                    return <a key={ index }>{name}</a>;
                  })}
              </li>
            </div>
         );
    }
}
 
export default Sidebar;

