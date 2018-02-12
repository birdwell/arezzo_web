import React, { Component } from 'react';
import { LabeledSelect } from '../../forms/common';

import { BaseForm } from '../../forms';
import { createFood } from '../../api';

const TYPE_OF_CUISINE = [
	{ label: 'italian', value: 'Italian' },
	{ label: 'american', value: 'American' },
	{ label: 'german', value: 'German' },
	{ label: 'Spanish', value: 'Spanish' },
	{ label: 'Chinese', value: 'Chinese' },
	{ label: 'Indian', value: 'Indian' },
];

const ATMOSPHERE = [
	{ label: 'fastFood', value: 'Fast Food' },
	{ label: 'fastCasual', value: 'Fast Casual' },
	{ label: 'casual', value: 'Casual' },
	{ label: 'find', value: 'Fine Dining' },
	{ label: 'cafe', value: 'Cafe or Bistro' },
	{ label: 'foodTruck', value: 'Food Truck' },
];

class CreateFood extends Component {
	state = {
		cuisine: '',
		atmosphere: '',
	}

	onChange = (name, value) => {
		this.setState({
			[name]: value,
		});
	}

	onSubmit = (fields) => {
		const { cuisine, atmosphere } = this.state;
		createFood({ cuisine, atmosphere, ...fields });
	}

	render() {
		const { atmosphere, cuisine } = this.state;
		return (
			<section className="food-form">
				<h3 className="form-header-title">Create a Restaurant</h3>
				<BaseForm onSubmit={this.onSubmit}>
					<LabeledSelect label="Type of cuisine:" name="cuisine" value={cuisine} onChange={this.onChange} options={TYPE_OF_CUISINE} />
					<br />
					<LabeledSelect label="Type of Atmosphere" name="atmosphere" value={atmosphere} onChange={this.onChange} options={ATMOSPHERE} />
				</BaseForm>
			</section>
		);
	}
}

export default CreateFood;
