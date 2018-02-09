import React from 'react';
import PropTypes from 'prop-types';

const SplitRow = ({ children, size }) => (
	<div className="form-row">
		{children.map(child => (React.cloneElement(child, { className: size })))}
	</div>
);

SplitRow.propTypes = {
	children: PropTypes.element,
	size: PropTypes.number,
};

SplitRow.defaultProps = {
	children: null,
	size: 'col-md-6',
};

export default SplitRow;
