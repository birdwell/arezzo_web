import React, { Component } from 'react';

import { LabeledSelect, LabeledField } from '../forms/common';

const TYPE_OF_TRAILS = [
	{ label: 'Hiking', value: 'hiking' },
	{ label: 'Biking', value: 'biking' },
	{ label: 'Equestrian', value: 'equestrian' },
];

const DIFFICULTY_OF_TRAIL = [
	{ label: 'Tourist(T)', value: 'tourist' },
	{ label: 'Hiking(E)', value: 'hiking' },
	{ label: 'Expert(EE)', value: 'expert' },
	{ label: 'Equipped Expert Hikers(EEA)', value: 'equipped' },
];

class AddOutdoors extends Component {
	state = {}
	render() {
		return (
			<div>
				<LabeledSelect name="trailType" label="Type of trail:" options={TYPE_OF_TRAILS} />
				<LabeledSelect name="trailDifficulty" label="Trail Difficulty:" options={DIFFICULTY_OF_TRAIL} />
				<LabeledField name="trailDistance" label="Trail Distance:" placeholder="Enter number of KMs" />
			</div>
		);
	}
}

export default AddOutdoors;
