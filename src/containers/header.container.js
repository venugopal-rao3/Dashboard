import React, {Component} from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header className="main-header">
              <div className ="desktop-header">
                <img src="/images/bitmap.jpg" alt="company-icon" className="company-wrapper"/>
                <img src="/images/search.svg" alt="search" className="search-clearfix"/>
                <input type="text" name="#"  placeholder = "Search for laptop, costumes etc" class="search_input">
                </input> 

                <div className = "icons-container">
                  <p className = "user-profile-name">Hi Jason
                    <img src="/images/down-arrow-black.svg" alt="down-arrow" className="user-profile-dropdown"/>
                  </p>
                  <img src="/images/cart.svg" alt="cart" className="cart-clearfix"/>
                </div>
              </div>

              <div className = "search-container">
                <img src="/images/search.svg" alt="search" className="search-clearfix"/>
                <input type="text" name="#"  placeholder = "Search for laptop, costumes etc" class="search_input">
                </input> 
              </div>
              <div className = "header">
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                <img src="/images/bitmap.jpg" alt="company-icon" className="company-wrapper"/>
                <img src="/images/cart.svg" alt="cart" className="cart-clearfix"/>
                <ul class="menu">
                    <select className = "user-profile-name">Hi Jason
                    <img src="/images/down-arrow-black.svg" alt="down-arrow" className="user-profile-dropdown"/>
                    <option value="profile">Profile</option>
                    <option value="wishlist">Wishlist</option>
                    <option value="Orders">Orders</option>
                  </select>
                </ul>
              </div>

            </header>
         );
    }
}
 
export default Header;