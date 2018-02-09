import React, { Component } from 'react';


const Hours = () => {
  return (
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
  );
};

export default Hours;