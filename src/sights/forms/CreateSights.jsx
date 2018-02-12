import React, { Component } from 'react';

import { LabeledSelect, LabeledRadio } from '../../forms';

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
	state = {}

	render() {
		return (
			<div>
				<h3 className="form-header-title">Create a Sight</h3>
				<LabeledSelect name="typeOfSight" label="Type of sight:" options={TYPE_OF_SIGHT} />
				<LabeledRadio label="Is the sight indoor?" options={INDOOR_OPTIONS} />
			</div>
		);
	}
}

export default CreateSights;
