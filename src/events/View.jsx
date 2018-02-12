import React from 'react';
import { Route } from 'react-router-dom';

import { CreateEvent } from './forms';

const Events = () => (
  <div className="events">
    <Route path="/events/create" component={CreateEvent} />
  </div>
);

export default Events;
