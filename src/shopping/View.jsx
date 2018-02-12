import React from 'react';
import { Route } from 'react-router-dom';

import { CreateShopping } from './forms';

const Shopping = () => (
	<div className="Shopping">
		<Route path="/shopping/create" component={CreateShopping} />
	</div>
);

export default Shopping;
