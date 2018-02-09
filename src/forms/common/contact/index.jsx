import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import { LabeledField, SplitRow } from '../fields';

const Contact = ({ phoneNumber, address, website, mediaLinks, onChange }) => (
	<div className="contact form-group">
		<h4>Contact Information</h4>
		<LabeledField label="Phone Number" name="phoneNumber" placeholder="#-###-###-####" type="tel" value={phoneNumber} onChange={onChange} />
		<LabeledField name="address" value={address} onChange={onChange} />
		<SplitRow>
			<LabeledField name="website" value={website} onChange={onChange} />
			<LabeledField label="Social Media" name="mediaLinks" value={mediaLinks} onChange={onChange} />
		</SplitRow>
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
