import React from 'react';
import './header-status-dropdown-component.css';

const HeaderStatusDropdown = (props) => {
  const url = "./images/" + props.image + ".svg"
    return (
        <div className="header-dropdown-status">
           <img className="header-dropdown-status--icon" src={url}></img>
           <label className="header-dropdown-status--title">{props.title}</label>
           <select className="header-dropdown-status--dropdown">
               {props.options.map(option => {
                   return(
                       <option name={option} value="option">{option}</option>
                   )
               })}
           </select>   
        </div>
    )
}
export default HeaderStatusDropdown;