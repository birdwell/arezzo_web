import axios from 'axios';

import { API_BASE } from './index';

export const createEvent = async (fields) => {
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
	event.paymentOptions = Array.isArray(paymentOptions) && paymentOptions.map(x => x.value);
	event.languagesAvailable = Array.isArray(languagesAvailable)
								&& languagesAvailable.map(x => x.value);
	// event.restrictions = restrictions.map(x => x.value);

	const response = await axios.post(`${API_BASE}/events`, { ...event });

	return response;
};

export const getEvents = async () => {
	try {
		const res = await axios.get(`${API_BASE}/events`);
		return res.data;
	} catch (e) {
		return e;
	}
};
