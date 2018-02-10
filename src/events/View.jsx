import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import './View.css';
import Event from './components/event';
import { getEvents } from '../api';

class Events extends Component {
  static propTypes = {
  };

  state = {
    events: [],
  }

  componentWillMount() {
    getEvents()
      .then(events => this.setState({ events }));
  }

  renderEvents = () => {
    const { events } = this.state;
    return (
      <ul className="list-group list-group-flush">
        {
          events.map(event => (
            <li key={event._id} className="list-group-item">
              <Event event={event} />
            </li>
          ))
        }
      </ul>
    );
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        <div className="card events">
          { events.length > 0 && this.renderEvents() }
          { events.length === 0 && <div className="empty-state">No Events</div> }
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
