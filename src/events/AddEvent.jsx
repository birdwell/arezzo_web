import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import { addEvent } from '../api';
import { SplitRow, BaseForm } from '../forms';

class AddEvent extends Component {
	state = {
		startDate: moment(),
		endDate: moment(),
	}

	onChange = (name, value) => {
		this.setState({
			[name]: value,
		});
	}

	onSubmit = (fields) => {
		const { startDate, endDate } = this.state;
		addEvent({ ...fields, startDate, endDate });
	}

	render() {
		const { startDate, endDate } = this.state;
		return (
			<div className="event-form">
				<BaseForm onSubmit={this.onSubmit}>
					<SplitRow>
						<label htmlFor="startDate">Start Date</label>
						<DatePicker
							selected={startDate}
							name="startDate"
							className="form-control date-picker"
							onChange={date => this.onChange('startDate', date)}
						/>
						<label htmlFor="endDate">End Date</label>
						<DatePicker
							selected={endDate}
							name="endDate"
							className="form-control date-picker"
							onChange={date => this.onChange('endDate', date)}
						/>
					</SplitRow>
				</BaseForm>

			</div>
		);
	}
}

export default AddEvent;
