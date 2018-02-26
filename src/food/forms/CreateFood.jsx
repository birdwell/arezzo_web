import React, { Component } from 'react';
import { LabeledSelect } from '../../forms/common';

import { BaseForm } from '../../forms';
import { createFood } from '../../api';

const TYPE_OF_CUISINE = [
	{ label: 'Italian', value: 'italian' },
	{ label: 'American', value: 'american' },
	{ label: 'German', value: 'german' },
	{ label: 'Spanish', value: 'spanish' },
	{ label: 'Chinese', value: 'chinese' },
	{ label: 'Indian', value: 'indian' },
];

const ATMOSPHERE = [
	{ label: 'Fast Food', value: 'fastFood' },
	{ label: 'Fast Casual', value: 'fastCasual' },
	{ label: 'Casual', value: 'casual' },
	{ label: 'Fine Dining', value: 'fine' },
	{ label: 'Cafe or Bistro', value: 'cafe' },
	{ label: 'Food Truck', value: 'foodTruck' },
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
					<LabeledSelect label="Type of cuisine:" name="cuisine" value={cuisine} onChange={(this.onChange)} options={TYPE_OF_CUISINE} />
					<br />
					<LabeledSelect label="Type of Atmosphere" name="atmosphere" value={atmosphere} onChange={this.onChange} options={ATMOSPHERE} />
				</BaseForm>
			</section>
		);
	}
}

export default CreateFood;
