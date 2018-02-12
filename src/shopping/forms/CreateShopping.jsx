import React, { Component } from 'react';

import { LabeledSelect } from '../../forms';

const TYPES_OF_SHOP = [
	{ label: 'antiques', value: 'Antiques' },
	{ label: 'clothing', value: 'Clothing' },
	{ label: 'electronics', value: 'Electronics' },
	{ label: 'food', value: 'Food' },
	{ label: 'convenience', value: 'Convenience' },
	{ label: 'books', value: 'Books' },
];

class CreateShopping extends Component {
	state = {}

	render() {
		return (
			<section className="shop-form">
				<h3 className="form-header-title">Create a Shop</h3>
				<LabeledSelect name="typeOfShopping" label="Type of shop:" options={TYPES_OF_SHOP} />
			</section>
		);
	}
}

export default CreateShopping;
