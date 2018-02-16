import React, { Component } from 'react';
import { BaseForm } from '../../forms';
import { createOutdoor } from '../../api';
import { LabeledSelect, LabeledField } from '../../forms/common';

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

class CreateOutdoors extends Component {
	state = {
		trailType: '',
		trailDifficulty: '',
		trailDistance: 0,

	}

	onChange = (name, value) => {
		this.setState({
			[name]: value,
		});
	}

	onSubmit = (fields) => {
		const { trailType, trailDifficulty, trailDistance } = this.state;
		createOutdoor({ trailType, trailDifficulty, trailDistance, ...fields });
	}

	render() {
		const { trailType, trailDifficulty, trailDistance } = this.state;
		return (
			<section className="outdoors-form">
				<h3 className="form-header-title">Create an Outdoor item</h3>
				<BaseForm onSubmit={this.onSubmit}>
					<LabeledSelect name="trailType" label="Type of trail:" value={trailType} onChange={this.onChange} options={TYPE_OF_TRAILS} />
					<br />
					<LabeledSelect name="trailDifficulty" label="Trail Difficulty:" value={trailDifficulty} onChange={this.onChange} options={DIFFICULTY_OF_TRAIL} />
					<LabeledField name="trailDistance" label="Trail Distance:" value={trailDistance} onChange={this.onChange} placeholder="Enter number of KMs" />
				</BaseForm>
			</section>
		);
	}
}

export default CreateOutdoors;
