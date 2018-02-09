import React from 'react';
import PropTypes from 'prop-types';

import { LabeledField } from '../fields';

const Contact = ({ phoneNumber, address, website, mediaLinks, onChange }) => (
	<div className="form-group">
		<h3>Contact Information</h3>
		<LabeledField label="Phone Number" name="phoneNumber" placeholder="#-###-###-####" type="tel" value={phoneNumber} onChange={onChange} />
		<LabeledField label="Address" name="address" value={address} onChange={onChange} />
		<LabeledField label="Website" name="website" value={website} onChange={onChange} />
		<LabeledField label="Social Media" name="mediaLinks" value={mediaLinks} onChange={onChange} />
	</div>
);

Contact.propTypes = {
	phoneNumber: PropTypes.number.isRequired,
	address: PropTypes.string.isRequired,
	website: PropTypes.string.isRequired,
	mediaLinks: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Contact;
