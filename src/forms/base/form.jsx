import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

import './form.css';
import { getPlaceDetail } from '../../api';
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
		children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
	}

	static defaultProps = {
		children: null,
	}

	state = {
		title: '',
		description: '',
		location: '',
		latitude: 0,
		longitude: 0,
		// hours: [],
		price: 0,
		phoneNumber: 0,
		address: '',
		website: '',
		mediaLinks: '',
		suggestedAge: 0,
		paymentOptions: [],
		languagesAvailable: [],
		restrictions: [],
		wifi: false,
		accessibility: false,
		visitDuration: 0,
	}

	onChange = (name, value) => {
		this.setState({
			[name]: value,
		});
	}

	onSubmit = async (e) => {
		e.preventDefault();
		const { longitude, latitude, location } = this.state;

		if ((longitude === 0 || latitude === 0) && location !== '') {
			const results = await geocodeByAddress(location);
			if (results && results.length > 0) {
				const lat = results[0].geometry.location.lat();
				const lng = results[0].geometry.location.lng();
				this.props.onSubmit({ ...this.state, longitude: lat, latitude: lng });
			}
		} else {
			this.props.onSubmit(this.state);
		}
	}

	autoFill = async (e) => {
		e.stopPropagation();
		const results = await geocodeByAddress(this.state.location);
		if (results && results.length > 0) {
			const placeDetails = await getPlaceDetail(results[0].place_id);
			if (placeDetails.status === 200 && placeDetails.data) {
				this.setState({ ...placeDetails.data });
			}
		}
	}

	render() {
		const {
			title, description,
			price, suggestedAge, paymentOptions,
			languagesAvailable, restrictions,
			wifi, accessibility,
			visitDuration, phoneNumber,
			address, website, mediaLinks,
			location,
		} = this.state;
		const inputProps = {
			value: location,
			onChange: x => this.onChange('location', x),
		};

		return (
			<form className="base-form" onSubmit={this.onSubmit}>
				{this.props.children}
				<br />
				<LabeledField name="title" value={title} onChange={this.onChange} />
				<LabeledField name="description" value={description} type="textarea" onChange={this.onChange} />
				<div className="form-group">
					<label htmlFor="location">Location</label>
					<PlacesAutocomplete classNames={{ root: 'places-autocomplete' }} inputProps={inputProps} />
					<br />
					<button onClick={this.autoFill} className="btn btn-primary">Attempt to Autofill</button>
				</div>
				<Contact
					phoneNumber={phoneNumber}
					address={address}
					website={website}
					mediaLinks={mediaLinks}
					onChange={this.onChange}
				/>
				<SplitRow>
					<LabeledField name="price" value={price} placeholder="Enter $0.00" onChange={this.onChange} />
					<MultiSelect name="paymentOptions" label="Payment Options" value={paymentOptions} options={PAYMENT_TYPES} onChange={this.onChange} />
				</SplitRow>
				<SplitRow>
					<MultiSelect name="languagesAvailable" label="Languages Available" value={languagesAvailable} options={LANGUAGES_AVAILABLE} onChange={this.onChange} />
					<LabeledField
						label="Recommended Visit Duration"
						name="visitDuration"
						placeholder="Enter number of hours"
						value={visitDuration}
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
					value={wifi}
					options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]}
					onChange={this.onChange}
				/>
				<LabeledRadio
					inline
					label="Handicap Accessibility?"
					name="accessibility"
					value={accessibility}
					options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]}
					onChange={this.onChange}
				/>
				<button type="submit" className="submit btn btn-primary">Submit</button>
			</form>
		);
	}
}

export default BaseForm;
