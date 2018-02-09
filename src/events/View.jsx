import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Link,
} from 'react-router-dom';

import './View.css';
import Event from './components/event';

class Events extends Component {
  static propTypes = {
  };

  state = {
    events: [],
  }

  componentWillMount() {
    axios('https://arezzo-server.herokuapp.com/events')
      .then((res) => {
        this.setState({
          events: res.data,
        });
      });
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        <div className="card events">
          <ul className="list-group list-group-flush">
          {
            events.length > 0 && (
              events.map(event => (
                <li key={event._id} className="list-group-item">
                  <Event event={event} />
                </li>
              ))
            )
          }
          </ul>
        </div>
        <div className="add-event round-button">
          <div className="round-button-circle">
            <Link className="round-button add-event-link" to="/addevent">+</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
