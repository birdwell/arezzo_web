import React, { Component } from 'react';

import { LabeledSelect, LabeledRadio, BaseForm } from '../../forms';
import { createSights } from '../../api/sights-api';


const TYPE_OF_SIGHT = [
	{ label: 'Natural', value: 'natural' },
	{ label: 'Monumnet', value: 'monument' },
	{ label: 'Ancient Temple', value: 'ancientTemple' },
	{ label: 'Zoo/Aquarium/Aviary', value: 'zoo' },
	{ label: 'Museum/Gallery', value: 'museum' },
	{ label: 'Buildings and Structures', value: 'buildings' },
	{ label: 'Theme Parks', value: 'themeParks' },
];

const INDOOR_OPTIONS = [
	{ value: 'yes', label: 'Yes', name: 'isIndoorOption' },
	{ value: 'no', label: 'No', name: 'isIndoorOption' },
];

class CreateSights extends Component {
	state = {
		typeOfSight: '',
		indoorOptions: '',
	}

	onChange = (name, value) => {
		this.setState({
			[name]: value,
		});
	}

	onSubmit = (fields) => {
		const { typeOfSight, indoorOptions } = this.state;
		createSights({ typeOfSight, indoorOptions, ...fields });
	}

	render() {
		return (
			<div>
				<h3 className="form-header-title">Create a Sight</h3>
				<BaseForm onSubmit={this.onSubmit}>
					<LabeledSelect name="typeOfSight" label="Type of sight:" options={TYPE_OF_SIGHT} />
					<br />
					<LabeledRadio label="Is the sight indoor?" options={INDOOR_OPTIONS} />
					</BaseForm>
			</div>
		);
	}
}

export default CreateSights;
