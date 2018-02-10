import axios from 'axios';

const API_BASE = process.env.NODE_ENV === 'production' ? 'https://arezzo-server.herokuapp.com' : '';

export const getPlaceDetail = async (placeId) => {
	const details = await axios.get(`${API_BASE}/placeDetails/${placeId}`);
	return details;
};

export const addEvent = async (fields) => {
	const {
		phoneNumber, address, website, mediaLinks,
		paymentOptions, languagesAvailable, restrictions,
	} = fields;
	const event = { ...fields };

	delete event.phoneNumber;
	delete event.address;
	delete event.website;
	delete event.mediaLinks;

	event.contactInfo = {
		phoneNumber,
		address,
		website,
		mediaLinks: mediaLinks.split(','),
	};

	event.paymentOptions = paymentOptions.split(',');
	event.languagesAvailable = languagesAvailable.split(',');
	event.restrictions = restrictions.split(',');

	const response = await axios.post(`${API_BASE}/place`, { ...event });
	debugger;
};
