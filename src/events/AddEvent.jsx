import React, { Component } from 'react';
import moment from 'moment';

import { addEvent } from '../api';
import { SplitRow, BaseForm, Date } from '../forms';

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
						<Date label="Start Date" name="startDate" value={startDate} onChange={this.onChange} />
						<Date label="End Date" name="endDate" value={endDate} onChange={this.onChange} />
					</SplitRow>
				</BaseForm>

			</div>
		);
	}
}

export default AddEvent;
