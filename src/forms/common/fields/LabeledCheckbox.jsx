import React from 'react';
import PropTypes from 'prop-types';

const LabeledCheckbox = ({ label, options, value, onChange }) => (
	<div className="form-check">
		<label>{label}</label>
		{options.map(option => (
			<div>
				<input className="form-check-input" type="checkbox" name={option.name} value={value === option.value} onChange={onChange} />
				<label className="form-check-label" htmlFor={option.name}>{option.label}</label>
			</div>
		))}
	</div>
);

LabeledCheckbox.propTypes = {
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf({
		name: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
	}).isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default LabeledCheckbox;
