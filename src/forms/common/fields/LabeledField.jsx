import React from 'react';
import PropTypes from 'prop-types';

import { capitalizeFirstLetter } from './utils';

const LabeledField = ({ placeholder, name, value, onChange, label, type }) => (
	<div className="form-group">
		<label htmlFor="address">{label || capitalizeFirstLetter(name)}</label>
		<input
			name={name}
			type={type}
			value={value}
			className="form-control"
			placeholder={placeholder}
			onChange={({ target }) => onChange(name, target.value)}
		/>
	</div>
);

LabeledField.propTypes = {
	placeholder: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	label: PropTypes.string,
	type: PropTypes.string,
};

LabeledField.defaultProps = {
	placeholder: '',
	label: '',
	type: 'text',
};

export default LabeledField;
