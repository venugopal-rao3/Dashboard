import React, { Component } from 'react';
import './body-container.css'
import { BrowserRouter as Router , Route, Link } from "react-router-dom";


class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const description = "Single door fridge or refrigerator 190 Ltrs near new condition with fast and effective cooling system to keep your food fresh available on rent in Bangalore";
    const category1 =  "Sports & Game";
    const category2 = "Laptops & Accessories";
    const category3 = "Rikes on Rent";
    const title = "Single Door Refrigerator - 190 litres only";
    const title1 = "Macbook Pro 16 GB RAM";
    const price_array = [500,630,1500];
    return ( 
      <div className="body-wrapper">
        <div className = "products-container">
          <div className = "products-catalog">
            <div className = "image-container">
              <img src="/images/full-small-size-fridge.jpg" alt="small-fridge" className="image-wrapper"/>
            </div>
            <span>{category1}</span>
            <h1>{title} </h1>
            <p>{description}</p>
            <div className= "price-wrapper">
              {price_array.map(function(value, index){
                    if (value == 500)
                      return <a key={ index }>₹{value}/day </a>;
                    else if (value == 630)
                      return <a key={ index }>₹{value}/week </a>;
                    else
                      return <a key={ index }>₹{value}/month </a>;

                  })}
            </div>
          </div>
          <div className = "view-details-wrapper">
            <Link  to = "/product"> View Details </Link>
          </div>
        </div>

        <div className = "products-container">
          <div className = "products-catalog">
            <div className = "image-container">
              <img src="/images/laptop.jpeg" alt="small-fridge" className="laptop-image-wrapper"/>
            </div>
            <span>{category2}</span>
            <h1>{title1} </h1>
            <p>{description}</p>
            <div className = "bulk-order-wrapper"> 
              <img src="/images/checkbox.svg" alt="small-checkbox"/>
              <span>Bulk Order available</span>
            </div>
            <div className= "price-wrapper">
              {price_array.map(function(value, index){
                    if (value == 500)
                      return <a key={ index }>₹{value}/day </a>;
                    else if (value == 630)
                      return <a key={ index }>₹{value}/week </a>;
                    else
                      return <a key={ index }>₹{value}/month </a>;

                  })}
            </div>
          </div>
          <div className = "view-details-wrapper">
            <Link  to = "/product"> View Details </Link>
          </div>
        </div>

        <div className = "products-container">
          <div className = "products-catalog">
            <div className = "image-container">
              <img src="/images/full-small-size-fridge1.jpg" alt="small-fridge" className="image-wrapper"/>
            </div>
            <span>{category3}</span>
            <h1>{title} </h1>
            <p>{description}</p>
            <div className= "price-wrapper">
              {price_array.map(function(value, index){
                    if (value == 500)
                      return <a key={ index }>₹{value}/day </a>;
                    else if (value == 630)
                      return <a key={ index }>₹{value}/week </a>;
                    else
                      return <a key={ index }>₹{value}/month </a>;

                  })}
            </div>
          </div>
          <div className = "view-details-wrapper">
            <Link  to = "/product"> View Details </Link>
          </div>
        </div>

        <div className = "products-container">
          <div className = "products-catalog">
            <div className = "image-container">
              <img src="/images/laptop.jpeg" alt="small-fridge" className="laptop-image-wrapper"/>
            </div>
            <span>{category2}</span>
            <h1>{title1} </h1>
            <p>{description}</p>
            <div className= "price-wrapper">
              {price_array.map(function(value, index){
                    if (value == 500)
                      return <a key={ index }>₹{value}/day </a>;
                    else if (value == 630)
                      return <a key={ index }>₹{value}/week </a>;
                    else
                      return <a key={ index }>₹{value}/month </a>;

                  })}
            </div>
          </div>
          <div className = "view-details-wrapper">
            <Link  to = "/product"> View Details </Link>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Body;