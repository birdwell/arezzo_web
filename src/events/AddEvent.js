import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import moment from 'moment';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';


import 'react-datepicker/dist/react-datepicker.css';

export default class AddEvent extends Component {


  static propTypes = {
    
  };
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      location: '',
      latitude: 0,
      longitude: 0,
      hours: Array(14),
      price: 0,
      phoneNumber: 0,
      address: '',
      websiteURL: '',
      mediaLinks: Array(), 
      mediaLinksString: '',
      suggestedAge: 0,
      paymentType: Array(), 
      languagesAvailable: Array(), 
      languagesAvailableString: '',
      restrictions: Array(), 
      restrictionsString: '',
      isWifiAvailable: true,
      isHandicapAccessible: true,
      recommendedVisitDuration: 0,
      typeOfItemToAdd: '',
      date: moment(),
      typeOfShopping: '',
      typeOfTrail: '',
      trailDifficulty: '',
      trailDistance: 0,
      typeOfSight: '',
      sightIsIndoor: true,
      typeOfCuisisne: '',
      restaurantAtmosphere: '',
      success: null,
      successMessage: ''
    }
    this.addEvent = this.addEvent.bind(this);
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
    });
  }


  //handles adding and removing payment methods as checkboxes
  //are selected and deselected
  handlePaymentChange = (paymentTypeToAdd) => {

    let indexOfItem = this.state.paymentType.indexOf(paymentTypeToAdd);

    //if item not already in array, add it
    if(indexOfItem < 0)
    {
      let newArray = this.state.paymentType;
      newArray.push(paymentTypeToAdd);
      this.setState({paymentType: newArray});
    }
    else //item already exists so remove it
    {
      let newArray = this.state.paymentType;
      newArray.splice(indexOfItem, 1);
      this.setState({paymentType: newArray});
    }
  }

  //parses string input of mediaLinks, langaugesAvailable, and restrictions
  //by commas into their respective lists
  handleListDelimiting = (type, valueAsLongString) =>{

     let splitUpArray = valueAsLongString.split(",");

     this.setState({
     [type]: splitUpArray
     });

  }

  
  async addEvent(event) {
    event.preventDefault();

    const { location, date, title, } = this.state;
    const results = await geocodeByAddress(location);
    const lat = results[0] && results[0].geometry.location.lat();
    const lng = results[0] && results[0].geometry.location.lng();
    
    const response = await axios.post('http://localhost:5000/addevent', { location, date: date.toDate(), title,  });
    this.setState({
      success: true,
      successMessage: response.data,
      location: '',
      title: '',
      date: moment(),
      typeOfItemToAdd: '',
    }, () => {
      window.setTimeout(this.clearSuccess, 1500);
    });
  }
  
  clearSuccess = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { location, date, title, description, latitude, longitude, hours, price, phoneNumber, address, websiteURL,
            mediaLinks, mediaLinksString, suggestedAge, paymentType, languagesAvailable, restrictions, isWifiAvailable, isHandicapAccessible,
            recommendedVisitDuration, typeOfItemToAdd, typeOfShopping, success, successMessage, languagesAvailableString, restrictionsString } = this.state;
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
        <form onSubmit={this.addEvent}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="event title" placeholder="Title" value={title} onChange={({target: {value}}) => this.onValueChange('title', value)} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="textarea" className="form-control" id="description" value={description} placeholder="Description" onChange={({target: {value}}) => this.onValueChange('description', value)} />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <PlacesAutocomplete classNames={{input: "form-control"}} inputProps={inputProps} />
            {/* <input type="text" className="form-control" id="eventLocation" placeholder="Location" value={location} onChange={({target: {value}}) => this.onValueChange('location', value)} /> */}
            <label htmlFor="latitude">Latitude</label>
            <input type="text" className="form-control" id="latitude" placeholder="Enter latitude" value={latitude} onChange={({target: {value}}) => this.onValueChange('latitude', value)}/>
            <label htmlFor="longitude">Longitude</label>
            <input type="text" className="form-control" id="longitude" placeholder="Enter longitude" value={longitude} onChange={({target: {value}}) => this.onValueChange('longitude', value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="hours">Open Hours</label>
            <form>
              <label>Sunday: </label>
              <label>Open: </label>
              <input type="text" className="form-control" id="sundayOpen" placeholder="00:00" value={hours[0]} onChange={({target: {value}}) => this.onValueChange('hours[0]', value)}/>
              <label>Close: </label>
              <input type="text" className="form-control" id="sundayClose" placeholder="00:00" value={hours[1]} onChange={({target: {value}}) => this.onValueChange('hours[1]', value)} />
            </form>
            <form>
              <label>Monday: </label>
              <label>Open: </label>
              <input type="text" className="form-control" id="mondayOpen" placeholder="00:00" value={hours[2]} onChange={({target: {value}}) => this.onValueChange('hours[2]', value)}/>
              <label>Close: </label>
              <input type="text" className="form-control" id="mondayClose" placeholder="00:00" value={hours[3]} onChange={({target: {value}}) => this.onValueChange('hours[3]', value)}/>
            </form>
            <form>
              <label>Tuesday: </label>
              <label>Open: </label>
              <input type="text" className="form-control" id="tuesdayOpen" placeholder="00:00" value={hours[4]} onChange={({target: {value}}) => this.onValueChange('hours[4]', value)}/>
              <label>Close: </label>
              <input type="text" className="form-control" id="tuesdayClose" placeholder="00:00" value={hours[5]} onChange={({target: {value}}) => this.onValueChange('hours[5]', value)}/>
            </form>
            <form>
              <label>Wednesday: </label>
              <label>Open: </label>
              <input type="text" className="form-control" id="wednesdayOpen" placeholder="00:00" value={hours[6]} onChange={({target: {value}}) => this.onValueChange('hours[6]', value)}/>
              <label>Close </label>
              <input type="text" className="form-control" id="wednesdayClose" placeholder="00:00" value={hours[7]} onChange={({target: {value}}) => this.onValueChange('hours[7]', value)}/>
            </form>
            <form>
              <label>Thursday: </label>
              <label>Open: </label>
              <input type="text" className="form-control" id="thursdayOpen" placeholder="00:00" value={hours[8]} onChange={({target: {value}}) => this.onValueChange('hours[8]', value)}/>
              <label>Close: </label>
              <input type="text" className="form-control" id="thursdayClose" placeholder="00:00" value={hours[9]} onChange={({target: {value}}) => this.onValueChange('hours[9]', value)}/>
            </form>
            <form>
              <label>Friday: </label>
              <label>Open: </label>
              <input type="text" className="form-control" id="fridayOpen" placeholder="00:00" value={hours[10]} onChange={({target: {value}}) => this.onValueChange('hours[10]', value)}/>
              <label>Close: </label>
              <input type="text" className="form-control" id="fridayClose" placeholder="00:00" value={hours[11]} onChange={({target: {value}}) => this.onValueChange('hours[11]', value)}/>
            </form>
            <form>
              <label>Saturday: </label>
              <label>Open: </label>
              <input type="text" className="form-control" id="saturdayOpen" placeholder="00:00" value={hours[12]} onChange={({target: {value}}) => this.onValueChange('hours[12]', value)}/>
              <label>Close: </label>
              <input type="text" className="form-control" id="saturdayClose" placeholder="00:00" value={hours[13]} onChange={({target: {value}}) => this.onValueChange('hours[13]', value)}/>
            </form>
          </div>
          <div className="form-group">
            <label htmlFor="price" >Price</label>
            <input type="text" className="form-control" id="price" placeholder="Enter dollar signs" value={price} onChange={({target: {value}}) => this.onValueChange('price', value)}/>
          </div>
          {/*PICTURES*/}
          <div className="form-group">
            <label >Contact Information</label>
            <form>
              <label htmlFOor="phoneNumber">Phone Number: </label>
              <input type="text" className="form-control" id="phoneNumber" placeholder="#-###-###-####" value={phoneNumber} onChange={({target: {value}}) => this.onValueChange('phoneNumber', value)}/>
              <label htmlFor="address">Address: </label>
              <input type="text" className="form-control" id="address" value={address} onChange={({target: {value}}) => this.onValueChange('address', value)}/>
              <label htmlFor="websiteURL">Website URL: </label>
              <input type="text" className="form-control" id="websiteURL" value={websiteURL} onChange={({target: {value}}) => this.onValueChange('websiteURL', value)}/>
              <label htmlFor="mediaLinksString">Media links: </label>
              <input type="text" className="form-control " id="mediaLinks" placeholder="Separate by commas" value={mediaLinksString}  onChange={({target: {value}}) => this.onValueChange('mediaLinksString',value)} onBlur={({target: {value}}) => this.handleListDelimiting('mediaLinks', value)}/>
            </form>
          </div>
          <div className="form-group">
            <label htmlFor="suggestedAge">Suggested Age</label>
            <input type="text" className="form-control" id="suggestedAge" placeholder="3+, 18+, etc." value={suggestedAge} onChange={({target: {value}}) => this.onValueChange('suggestedAge', value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="paymentTypes">Payment Types</label><br></br>
            <input type="checkbox" name="payment1" value="cash" onChange={({target: {value}}) => this.handlePaymentChange( value)}/>Cash<br></br>
            <input type="checkbox" name="payment2" value="card" onChange={({target: {value}}) => this.handlePaymentChange( value)}/>Card<br></br>
            <input type="checkbox" name="payment3" value="bitcoin" onChange={({target: {value}}) => this.handlePaymentChange( value)}/>Bitcoin
          </div>
          <div className="form-group">
            <label ntmlFor="languagesAvailableString">Languages Available</label>
            <input type="text" className="form-control" id="languagesAvailable" placeholder="Separate by commas" value={languagesAvailableString} onChange={({target: {value}}) => this.onValueChange('languagesAvailableString', value)} onBlur={({target: {value}}) => this.handleListDelimiting('languagesAvailable', value)} />
          </div>
          <div className="form-group">
            <label htmlFor="restrictionsString">Restrictions</label>
            <input type="text" className="form-control" id="restrictions" placeholder="None"  value={restrictionsString} onChange={({target: {value}}) => this.onValueChange('restrictionsString', value)} onBlur={({target: {value}}) => this.handleListDelimiting('restrictions', value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="isWifiAvailability">Wifi Available?</label><br></br>
                <input type="radio" name="wifiOption" value="yes" checked={this.state.isWifiAvailable === true} onChange={({target: {value}}) => this.onValueChange('isWifiAvailable', value)}/>Yes<br></br>
                <input type="radio" name="wifiOption" value="no" checked={this.state.isWifiAvailable === false} onChange={({target: {value}}) => this.onValueChange('isWifiAvailable', value)}/>No<br></br>
          </div>
          <div className="form-group">
            <label htmlFor="isHandicapAccessible">Handicap Accessibility?</label><br></br>
                <input type="radio" name="handicapAccessibilityOption" value="yes" checked={this.state.isHandicapAccessible === true} onChange={({target: {value}}) => this.onValueChange('isHandicapAccessible', value)}/>Yes<br></br>
                <input type="radio" name="handicapAccessibilityOption" value="no" checked={this.state.isHandicapAccessible === false} onChange={({target: {value}}) => this.onValueChange('isHandicapAccessible', value)}/>No<br></br>
          </div>
          <div className="form-group">
            <label htmlFor="recommendedVisitDuration">Recommended Visit Duration</label>
            <input type="text" className="form-control" id="visitDuration" placeholder="Enter number of hours" value={recommendedVisitDuration} onChange={({target: {value}}) => this.onValueChange('recommendedVisitDuration', value)}/>
          </div>
          <div className="form-group">
            <label htmlFor='typeOfItemToAdd'>What type of item are you adding?</label>
            <form>
              <input type="radio" name="typeOfItemToAdd" value="shopping" checked={this.state.typeOfItemToAdd === 'shopping'} onChange={({target: {value}}) => this.onValueChange('typeOfItemToAdd', value)}/>Shopping<br></br>
              <input type="radio" name="typeOfItemToAdd" value="outdoors" checked={this.state.typeOfItemToAdd === 'outdoors'} onChange={({target: {value}}) => this.onValueChange('typeOfItemToAdd', value)}/>Outdoors<br></br>
              <input type="radio" name="typeOfItemToAdd" value="sight" checked={this.state.typeOfItemToAdd === 'sight'} onChange={({target: {value}}) => this.onValueChange('typeOfItemToAdd', value)}/>Sight<br></br>
              <input type="radio" name="typeOfItemToAdd" value="event" checked={this.state.typeOfItemToAdd === 'event' } onChange={({target: {value}}) => this.onValueChange('typeOfItemToAdd', value)}/>Event<br></br>
              <input type="radio" name="typeOfItemToAdd" value="food" checked={this.state.typeOfItemToAdd === 'food' } onChange={({target: {value}}) => this.onValueChange('typeOfItemToAdd', value)}/>Food<br></br>
            </form>
            <AdditionalInformation typeOfItemToAdd={this.state.typeOfItemToAdd}
                typeOfShoppping = {this.state.typeOfShopping}/>
          </div>
          <button type="submit" className="add-event-btn btn btn-primary">Add Item</button>
        </form>
      </div>
    );
  }

}


class AdditionalInformation extends React.Component {

  constructor(props) {
    super(props);

  };

  onValueChange = (type, value) => {
    [type] = value;
  }

  render() {

    let typeOfItemToAdd = this.props.typeOfItemToAdd;
    let typeOfShopping = this.props.typeOfShopping;


  console.log(typeOfItemToAdd + "   " + typeOfShopping);
  if(typeOfItemToAdd === 'shopping')
  {
    return(
      <div>
        <label>Type of shop:</label>
        <select value={typeOfShopping} onChange={({target: {value}}) => this.onValueChange('typeOfShopping', value)} >
          <option value="antiques">Antiques</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="food">Food</option>
          <option value="convenience">Convenience</option>
          <option value="books">Books</option>
        </select>
      </div>
    );
  }
  else if(typeOfItemToAdd === 'outdoors')
  {
    return(
      <div>
        <label>Type of trail:</label>
        <select>
          <option value="hiking">Hiking</option>
          <option value="biking">Biking</option>
          <option value="equestrian">Equestrian</option>
        </select>
        <label>Trail Difficullty:</label>
        <select>
          <option value="tourist">Tourist(T)</option>
          <option value="hiking">Hiking(E)</option>
          <option value="expert">Expert Hikers(EE)</option>
          <option value="equipped">Equipped Expert Hikers(EEA)</option>
        </select><br></br>
        <label>Trail Distance: </label>
        <input type="text" className="form-control" id="trailDistance" placeholder="Enter number of kilometers" />
      </div>
    );
  }
  else if(typeOfItemToAdd === 'sight')
  {
    return(
      <div>
        <label>Type of sight:</label>
        <select>
          <option value="natural">Natural</option>
          <option value="monument">Monumnet</option>
          <option value="ancientTemple">Ancient Temple</option>
          <option value="zoo">Zoo/Aquarium/Aviary</option>
          <option value="museum">Museum/Gallery</option>
          <option value="buildings">Buildings and Structures</option>
          <option value="themeParks">Theme Parks</option>
        </select>
        <br></br>
      <label>Is the sight indoor?</label><br></br>
        <input type="radio" name="isIndoorOption" value="yes" />Yes<br></br>
        <input type="radio" name="isIndoorOption" value="no" />No
      </div>
    );
  }
  else if(typeOfItemToAdd === 'event')
  {
    return(
      <div className="form-group">
        <label htmlFor="date">Date</label>
          <DatePicker
            className="form-control date-picker"
            id="date"
            //selected={props.date}
            //onChange={AddEvent.handleDateChange}
          />
      </div>
    );
  }
  else if(typeOfItemToAdd === 'food')
  {
    return(
      <div>
        <label>Type of cuisine:</label>
        <select>
          <option value="italian">Italian</option>
          <option value="american">American</option>
          <option value="german">German</option>
          <option value="spanish">Spanish</option>
          <option value="chinese">Chinese</option>
          <option value="indian">Indian</option>
        </select>
        <label>Atmosphere: </label>
        <select>
          <option value="fastFood">Fast Food</option>
          <option value="fastCasual">Fast Casual</option>
          <option value="casual">Casual</option>
          <option value="fine">Fine Dining</option>
          <option value="cafe">Cafe or Bistro</option>
          <option value="foodTruck">Food Truck</option>
        </select>
      </div>
    );
  }
  else
  {
    return null;
  }
}}