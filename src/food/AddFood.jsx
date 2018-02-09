import React, { Component } from 'react';
import { LabeledSelect } from '../forms/common';

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

class AddFood extends Component {
	state = {}

	render() {
		return (
			<section className="food-form">
				<LabeledSelect label="Type of cuisine:" name="cuisine" options={TYPE_OF_CUISINE} />
				<LabeledSelect label="Type of Atmosphere" name="atmosphere" options={ATMOSPHERE} />
			</section>
		);
	}
}

export default AddFood;
