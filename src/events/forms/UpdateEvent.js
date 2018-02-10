import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import moment from 'moment';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

import 'react-datepicker/dist/react-datepicker.css';

export default class CreateEvent extends Component {

  static propTypes = {
    
  };
  
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      date: moment(),
      title: '',
      success: null,
      successMessage: '',
      eventId: ''
    }
    this.updateEvent = this.updateEvent.bind(this);
  }
  
  componentWillMount() {
    const { match: { params: { eventId }}} = this.props;
    axios(`https://arezzo-server.herokuapp.com/events/${eventId}`)
      .then(res => {
        this.setState({
          eventId,
          ...res.data,
          date: moment(res.data.date)
        });
      })
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
  
  handleLocationChange = (location) => {
    this.setState({
      location
    })
  }
  
  async updateEvent(event) {
    event.preventDefault();

    const { location, date, title, eventId } = this.state;
    // const results = await geocodeByAddress(location);
    // const lat = results[0] && results[0].geometry.location.lat();
    // const lng = results[0] && results[0].geometry.location.lng();
    
    const response = await axios.put(`http://localhost:5000/updateevent`, { eventId, 
      fields: {
        location, date: date.toDate(), title
      }
    });
    
    this.setState({
      success: true,
      successMessage: 'Success',
      ...response
    }, () => {
      window.setTimeout(this.clearSuccess, 1500);
    });
  }
  
  clearSuccess = () => {
    this.setState({
      successMessage: '',
      sucess: false
    })
  }

  render() {
    const { location, date, title, success, successMessage } = this.state;
    const inputProps = {
      value: location,
      onChange: this.handleLocationChange,
    };
    
    return (
      <div className="add-event">
        {success && (
          <div className="alert alert-success" role="alert">
            { successMessage }
          </div>
        )}
        <form onSubmit={this.updateEvent}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="event title" placeholder="Title" value={title} onChange={({target: {value}}) => this.onValueChange('title', value)} />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <PlacesAutocomplete classNames={{input: "form-control"}} inputProps={inputProps} />
            {/* <input type="text" className="form-control" id="eventLocation" placeholder="Location" value={location} onChange={({target: {value}}) => this.onValueChange('location', value)} /> */}
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
          <button type="submit" className="add-event-btn btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}