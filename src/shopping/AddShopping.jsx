import React, { Component } from 'react';

import { LabeledSelect } from '../forms/common';

const TYPES_OF_SHOP = [
	{ label: 'antiques', value: 'Antiques' },
	{ label: 'clothing', value: 'Clothing' },
	{ label: 'electronics', value: 'Electronics' },
	{ label: 'food', value: 'Food' },
	{ label: 'convenience', value: 'Convenience' },
	{ label: 'books', value: 'Books' },
];

class AddShopping extends Component {
	state = {}

	render() {
		return (
			<section className="shop-form">
				<LabeledSelect name="typeOfShopping" label="Type of shop:" options={TYPES_OF_SHOP} />
			</section>
		);
	}
}

export default AddShopping;
