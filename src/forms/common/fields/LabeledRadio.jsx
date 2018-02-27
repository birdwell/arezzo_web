import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './LabeledRadio.css';

const LabeledRadio = ({ label, options, value, onChange, name, inline }) => (
	<div>
		<label>{label}</label>
		<br />
		<div className={cx('form-check', { 'form-check-inline': inline })}>
			{options.map(option => (
				<div className="radio-option" key={option.value}>
					<input className="form-check-input" type="radio" name={name} value={option.value} onChange={({ target }) => onChange(name, target.value)} />
					<label className="form-check-label" htmlFor={name}>{option.label}</label>
				</div>
			))}
		</div>
	</div>
);

LabeledRadio.propTypes = {
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
		label: PropTypes.string.isRequired,
	})).isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	inline: PropTypes.bool,
};

LabeledRadio.defaultProps = {
	inline: false,
	value: '',
};

export default LabeledRadio;
