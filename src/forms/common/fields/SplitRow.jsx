import React from 'react';
import PropTypes from 'prop-types';

const SplitRow = ({ children, size }) => (
	<div className="form-row">
		{children.map(child => (React.cloneElement(child, { className: size, key: child.props.name })))}
	</div>
);

SplitRow.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
	size: PropTypes.string,
};

SplitRow.defaultProps = {
	children: null,
	size: 'col-md-6',
};

export default SplitRow;
