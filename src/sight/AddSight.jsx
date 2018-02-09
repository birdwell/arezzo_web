import React, { Component } from 'react';

import { LabeledSelect, LabeledRadio } from '../forms/common';

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

class AddSight extends Component {
	state = {}

	render() {
		return (
			<div>
				<LabeledSelect name="typeOfSight" label="Type of sight:" options={TYPE_OF_SIGHT} />
				<LabeledRadio label="Is the sight indoor?" options={INDOOR_OPTIONS} />
			</div>
		);
	}
}

export default AddSight;
