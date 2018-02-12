import React from 'react';
import { Route } from 'react-router-dom';

import { CreateOutdoors } from './forms';

const Outdoors = () => (
	<div className="outdoors">
		<Route path="/outdoors/create" component={CreateOutdoors} />
	</div>
);

export default Outdoors;
