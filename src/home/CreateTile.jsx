import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CreateTile = ({ label, icon, path }) => (
	<Link to={path}>
		<div className="create-tile">
			{icon !== '' && <div className="create-tile-icon" style={{ backgroundImage: URL(icon) }} />}
			<div className="create-tile-label">{ label }</div>
		</div>
	</Link>
);

CreateTile.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.string,
	path: PropTypes.string.isRequired,
};

CreateTile.defaultProps = {
	icon: '',
};

export default CreateTile;
