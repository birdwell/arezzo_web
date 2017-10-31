import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

class App extends Component {
  
  state = {
    location: '',
    date: moment(),
    title: '',
    success: null,
    successMessage: ''
  }
  
  onValueChange = (type, value) => {
    this.setState({
      [type]: value
    });
  }
  
  handleDateChange = (date) => {
    this.setState({
      date
    });
  }
  
  addEvent = (e) => {
    const { location, date, title } = this.state;
    e.preventDefault();

    axios.post('http://localhost:5000/addevent', { location, date: date.toDate(), title })
      .then((res) => {
        this.setState({
          success: true,
          successMessage: res.data,
          location: '',
          title: '',
          date: moment()
        }, () => {
          window.setTimeout(this.clearSuccess, 1500);
        });
      });
  }
  
  clearSuccess = () => {
    this.setState({
      success: null,
      successMessage: ''
    })
  }
  
  render() {
    const { location, date, title, success, successMessage } = this.state;
    
    return (
      <div className="App">
        {success && (
          <div className="alert alert-success" role="alert">
            { successMessage }
          </div>
        )}
        <form onSubmit={this.addEvent}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="event title" placeholder="Title" value={title} onChange={({target: {value}}) => this.onValueChange('title', value)} />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" className="form-control" id="eventLocation" placeholder="Location" value={location} onChange={({target: {value}}) => this.onValueChange('location', value)} />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <DatePicker
                className="form-control date-picker"
                id="date"
                selected={date}
                onChange={this.handleDateChange}
            />
          </div>
          <button type="submit" className="add-event-btn btn btn-primary">Add Event</button>
        </form>
      </div>
    );
  }
}

export default App;
