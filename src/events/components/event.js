import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Icon from 'react-icons-kit';
import { pencil } from 'react-icons-kit/icomoon/pencil'; 
import { Link } from 'react-router-dom';
import './event.css';

export default function Event({ event }) {
  debugger;
  return (
    <div className="event">
      <div className="event-date">
        <div className="event-month">{ moment(event.date).format('MMM') }</div>
        <div className="event-day">{ moment(event.date).format('D').toUpperCase() }</div>
      </div>
      <div className="event-info">
        <div className="event-title">{event.title}</div>
        <div className="event-location">{event.location}</div>
      </div>
      <Link to={`/updateevent/${event._id}`}>
        <Icon className="event-edit" icon={pencil} />
      </Link>
    </div>
  );
}

Event.propTypes = {
  
};