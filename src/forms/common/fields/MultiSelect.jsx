import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import cx from 'classnames';

import 'react-select/dist/react-select.css';

const MultiSelect = ({ label, value, options, onChange, name, className }) => (
	<div className={cx('form-group', [className])}>
		<label>{label}</label>
		<Select
			multi
			name={name}
			value={value}
			onChange={x => onChange(name, x)}
			options={options}
		/>
	</div>
);

MultiSelect.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
	options: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string.isRequired,
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		]).isRequired,
	})).isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
};

MultiSelect.defaultProps = {
	value: '',
	className: '',
};

export default MultiSelect;
