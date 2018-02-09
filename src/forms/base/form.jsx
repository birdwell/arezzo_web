import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import PlacesAutocomplete from 'react-places-autocomplete';
// import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

import 'react-select/dist/react-select.css';

import { LabeledField, LabeledRadio, Contact } from '../common';

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
				<LabeledField name="title" value={title} placeholder="Title" onChange={this.onChange} />
				<LabeledField name="description" value={description} placeholder="Description" type="textarea" onChange={this.onChange} />
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
				<LabeledField name="price" value={price} placeholder="Enter $0.00" onChange={this.onChange} />
				<LabeledField name="suggestedAge" label="Suggested Age" value={suggestedAge} placeholder="3+, 18+, etc." onChange={this.onChange} />
				<Select
					multi
					name="paymentType"
					value={paymentType}
					onChange={value => this.onChange('paymentType', value)}
					options={[
						{ value: 'cash', label: 'Cash' },
						{ value: 'card', label: 'Card' },
						{ value: 'check', label: 'Check' },
					]}
				/>
				<Select
					multi
					name="languagesAvailable"
					value={languagesAvailable}
					onChange={value => this.onChange('languagesAvailable', value)}
					options={[
						{ value: 'english', label: 'English' },
						{ value: 'italian', label: 'Italian' },
						{ value: 'french', label: 'French' },
						{ value: 'spanish', label: 'Spanish' },
						{ value: 'german', label: 'German' },
					]}
				/>
				<LabeledField name="restrictions" value={restrictions} placeholder="None" onChange={this.onChange} />
				<LabeledRadio
					label="Wifi Available"
					name="isWifiAvailabe"
					value={isWifiAvailable}
					options={[{ label: 'yes', value: 'yes' }, { label: 'no', value: 'no' }]}
					onChange={this.onChange}
				/>
				<LabeledRadio
					label="Handicap Accessibility?"
					name="isHandicapAccessible"
					value={isHandicapAccessible}
					options={[{ label: 'yes', value: 'yes' }, { label: 'no', value: 'no' }]}
					onChange={this.onChange}
				/>
				<LabeledField
					name="recommendedVisitDuration"
					label="Recommended Visit Duration"
					placeholder="Enter number of hours"
					value={recommendedVisitDuration}
					onChange={this.onChange}
				/>
			</form>
		);
	}
}

export default BaseForm;
