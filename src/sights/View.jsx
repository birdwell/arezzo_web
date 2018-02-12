import React from 'react';
import { Route } from 'react-router-dom';

import { CreateSights } from './forms';

const Sights = () => (
	<div className="sights">
		<Route path="/sights/create" component={CreateSights} />
	</div>
);

export default Sights;
