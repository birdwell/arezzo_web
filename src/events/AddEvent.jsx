import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import { BaseForm } from '../forms/base';

class AddEvent extends Component {
	state = {
		date: moment(),
	}

	onChange = (date) => {
		this.setState({ date });
	}

	onSubmit = (fields) => {
		debugger;
	}

	render() {
		const { date } = this.state;
		return (
			<div className="event-form">
				<BaseForm onSubmit={this.onSubmit}>
					<label htmlFor="date">Date</label>
					<DatePicker
						selected={date}
						name="date"
						className="form-control date-picker"
						onChange={this.onChange}
						id="date"
					/>
				</BaseForm>

			</div>
		);
	}
}

export default AddEvent;
