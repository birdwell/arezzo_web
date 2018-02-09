import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import PlacesAutocomplete from 'react-places-autocomplete';
// import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

import 'react-select/dist/react-select.css';

import { LabeledField, LabeledRadio, Contact, MultiSelect, SplitRow } from '../common';

const PAYMENT_TYPES = [
	{ value: 'cash', label: 'Cash' },
	{ value: 'card', label: 'Card' },
	{ value: 'check', label: 'Check' },
];

const LANGUAGES_AVAILABLE = [
	{ value: 'english', label: 'English' },
	{ value: 'italian', label: 'Italian' },
	{ value: 'french', label: 'French' },
	{ value: 'spanish', label: 'Spanish' },
	{ value: 'german', label: 'German' },
];

class BaseForm extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
		children: PropTypes.element,
	}

	static defaultProps = {
		children: null,
	}

	state = {
		title: '',
		description: '',
		// location: '',
		latitude: 0,
		longitude: 0,
		// hours: [],
		price: 0,
		phoneNumber: 0,
		address: '',
		website: '',
		mediaLinks: [],
		suggestedAge: 0,
		paymentType: [],
		languagesAvailable: [],
		restrictions: [],
		isWifiAvailable: false,
		isHandicapAccessible: false,
		recommendedVisitDuration: 0,
	}

	onChange = (name, value) => {
		this.setState({
			[name]: value,
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state);
	}

	render() {
		const {
			title, description,
			price, suggestedAge, paymentType,
			languagesAvailable, restrictions,
			isWifiAvailable, isHandicapAccessible,
			recommendedVisitDuration, phoneNumber,
			address, website, mediaLinks,
		} = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				{this.props.children}
				<br />
				<LabeledField name="title" value={title} onChange={this.onChange} />
				<LabeledField name="description" value={description} type="textarea" onChange={this.onChange} />
				<Contact
					phoneNumber={phoneNumber}
					address={address}
					website={website}
					mediaLinks={mediaLinks}
					onChange={this.onChange}
				/>
				<div className="form-group">
					{/* <label htmlFor="location">Location</label>
					<PlacesAutocomplete classNames="form-control" inputProps={inputProps} /> */}
				</div>
				<SplitRow>
					<LabeledField name="price" value={price} placeholder="Enter $0.00" onChange={this.onChange} />
					<MultiSelect name="paymentType" label="Payment Type" value={paymentType} options={PAYMENT_TYPES} onChange={this.onChange} />
				</SplitRow>
				<SplitRow>
					<MultiSelect name="languagesAvailable" label="Languages Available" value={languagesAvailable} options={LANGUAGES_AVAILABLE} onChange={this.onChange} />
					<LabeledField
						label="Recommended Visit Duration"
						name="recommendedVisitDuration"
						placeholder="Enter number of hours"
						value={recommendedVisitDuration}
						onChange={this.onChange}
					/>
				</SplitRow>
				<SplitRow>
					<LabeledField name="suggestedAge" label="Suggested Age" value={suggestedAge} placeholder="3+, 18+, etc." onChange={this.onChange} />
					<LabeledField name="restrictions" value={restrictions} placeholder="None" onChange={this.onChange} />
				</SplitRow>
				<LabeledRadio
					inline
					label="Wifi Available"
					name="isWifiAvailabe"
					value={isWifiAvailable}
					options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]}
					onChange={this.onChange}
				/>
				<LabeledRadio
					inline
					label="Handicap Accessibility?"
					name="isHandicapAccessible"
					value={isHandicapAccessible}
					options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]}
					onChange={this.onChange}
				/>
			</form>
		);
	}
}

export default BaseForm;
