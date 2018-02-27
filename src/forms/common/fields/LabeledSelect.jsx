import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const LabeledSelect = ({ label, options, onChange, name }) => (
	<Fragment>
		<label>{label}</label>
		<select name={name} onChange={({ target }) => onChange(name, target.value)}>
			{options.map(option => (
				<option key={option.value} value={option.value}>{option.label}</option>
			))}
		</select>
	</Fragment>
);

LabeledSelect.propTypes = {
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf({
		value: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
	}).isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
};

export default LabeledSelect;
