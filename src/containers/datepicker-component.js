import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { extendMoment } from "moment-range";
import { formatDate, parseDate } from 'react-day-picker/moment';
const moment = extendMoment(originalMoment);

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);
    const today = moment();
    
    this.state = {
      isOpen: true,
      value: moment.range(today.clone().subtract(7, "days"), today.clone()),
      
    };
  }

  onSelect = (value, states) => {
    this.setState({ value, states });
  };


  renderSelectionValue = () => {
    var start = moment(this.state.value.start.format("YYYY-MM-DD"));
    var end = moment(this.state.value.end.format("YYYY-MM-DD"));
    var range = moment.duration(start.diff(end)).asDays();
    if(start <= end) 
      var no_of_days = Math.abs(range)+1;
    else
      var no_of_days = Math.abs(range);
    return (
      
      <div >
        <input 
          type = "text" 
          name = "text" 
          value = {this.state.value.start.format("YYYY-MM-DD")} 
        />
        <span className = "to"> To </span>
        <input 
          type = "text" 
          name = "text" 
          value = {this.state.value.end.format("YYYY-MM-DD")} 
        />
        <span class = "number-days">No of days: 
        <em>{no_of_days}</em></span>
      </div>
    );
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className = "input-date-picker">
        <div className = "date-picker-container">
          <div>{this.renderSelectionValue()}</div>

          <div className = "price-discount-wrapper">
            <div className = "rent-wrapper">
              <p>Rent:</p>
              <p className ="price-value">₹6000</p>
            </div>
            <div className = "refund">
              <p>Refundable Deposit:</p>
              <span>₹4000</span>
            </div>
            <div className = "delivery">
              <p>Delivery & Pickup:</p>
              <span>₹4000</span>
            </div>
          </div>
          <div className = "rent-surge">
            <span>Rent is on Surge</span>
            <span>Rent is on Surge by 1.2 times</span>
          </div>

          {this.state.isOpen && (
            <DateRangePicker
              value={this.state.value}
              onSelect={this.onSelect}
              singleDateRange={true}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Example;
