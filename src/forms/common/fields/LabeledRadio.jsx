import React from 'react';
import PropTypes from 'prop-types';

const LabeledRadio = ({ label, options, value, onChange, name }) => (
	<div className="form-check">
		<label>{label}</label>
		{options.map(option => (
			<div key={option.value}>
				<input className="form-check-input" type="radio" name={name} value={value === option.value} onChange={onChange} />
				<label className="form-check-label" htmlFor={name}>{option.label}</label>
			</div>
		))}
	</div>
);

LabeledRadio.propTypes = {
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf({
		value: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
	}).isRequired,
	value: PropTypes.oneOfType(PropTypes.string, PropTypes.bool).isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
};

export default LabeledRadio;
