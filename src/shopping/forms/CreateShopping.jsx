import React, { Component } from 'react';

import { LabeledSelect, BaseForm } from '../../forms';
import { createShopping } from '../../api';

const TYPES_OF_SHOP = [
	{ label: 'antiques', value: 'Antiques' },
	{ label: 'clothing', value: 'Clothing' },
	{ label: 'electronics', value: 'Electronics' },
	{ label: 'food', value: 'Food' },
	{ label: 'convenience', value: 'Convenience' },
	{ label: 'books', value: 'Books' },
];

class CreateShopping extends Component {
	state = {
		typeOfShopping: '',
	}

	onChange = (name, value) => {
		this.setState({
			[name]: value,
		});
	}

	onSubmit = (fields) => {
		const { typeOfShopping } = this.state;
		createShopping({ typeOfShopping, ...fields });
	}

	render() {
		return (
			<section className="shop-form">
				<h3 className="form-header-title">Create a Shop</h3>
				<BaseForm obSubmit={this.onSubmit}>
					<LabeledSelect name="typeOfShopping" label="Type of shop:" options={TYPES_OF_SHOP} onChange={this.onChange}/>
				</BaseForm>
			</section>
		);
	}
}

export default CreateShopping;
