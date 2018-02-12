import React from 'react';
import { Route } from 'react-router-dom';

import { CreateFood } from './forms';

const Food = () => (
	<div className="food">
		<Route path="/food/create" component={CreateFood} />
	</div>
);

export default Food;
