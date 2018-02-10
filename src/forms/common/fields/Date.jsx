import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Date = ({ label, name, value, className, onChange }) => (
	<div className={cx('form-group', [className])}>
		<label htmlFor={name}>{ label }</label>
		<DatePicker
			selected={value}
			name={name}
			className="form-control date-picker"
			onChange={date => onChange(name, date)}
		/>
	</div>
);

Date.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.instanceOf(Date).isRequired,
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

Date.defaultProps = {
	className: '',
};

export default Date;
