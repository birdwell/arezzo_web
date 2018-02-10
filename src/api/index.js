import axios from 'axios';

const API_BASE = process.env.NODE_ENV === 'production' ? 'https://arezzo-server.herokuapp.com' : '';

export const getPlaceDetail = async (placeId) => {
	const details = await axios.get(`${API_BASE}/placeDetails/${placeId}`);
	return details;
};

export const addEvent = async (fields) => {
	const {
		phoneNumber, address, website, mediaLinks,
		paymentOptions, languagesAvailable,
	} = fields;
	const event = { ...fields };

	delete event.phoneNumber;
	delete event.address;
	delete event.website;
	delete event.mediaLinks;

	/* From Google Api */
	delete event.icon;
	delete event.id;
	delete event.name;
	delete event.photos;
	delete event.rating;
	delete event.reviews;
	delete event.types;

	event.contactInfo = {
		phoneNumber,
		address,
		website,
		mediaLinks: mediaLinks.split(','),
	};
	debugger;
	event.paymentOptions = paymentOptions.map(x => x.value);
	event.languagesAvailable = languagesAvailable.map(x => x.value);
	// event.restrictions = restrictions.map(x => x.value);

	const response = await axios.post(`${API_BASE}/place`, { ...event });
	debugger;
};
