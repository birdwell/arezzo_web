import axios from 'axios';

import { API_BASE } from './index';
import { formatData } from './utils';

export const createEvent = async (fields) => {
	const {
		paymentOptions, languagesAvailable,
	} = fields;
	const event = formatData(fields);

	event.paymentOptions = Array.isArray(paymentOptions) && paymentOptions.map(x => x.value);
	event.languagesAvailable = Array.isArray(languagesAvailable)
								&& languagesAvailable.map(x => x.value);
	// event.restrictions = restrictions.map(x => x.value);
	try {
		const response = await axios.post(`${API_BASE}/events`, { ...event });
		return response;
	} catch (e) {
		return e;
	}
};

export const getEvents = async () => {
	try {
		const response = await axios.get(`${API_BASE}/events`);
		return response.data;
	} catch (e) {
		return e;
	}
};

export const updateEvent = async (fields) => {
	const {
		paymentOptions, languagesAvailable,
	} = fields;

	const event = formatData(fields);

	event.paymentOptions = Array.isArray(paymentOptions) && paymentOptions.map(x => x.value);
	event.languagesAvailable = Array.isArray(languagesAvailable)
								&& languagesAvailable.map(x => x.value);

	try {
		const response = await axios.put(`${API_BASE}/events`, { ...event });
		return response;
	} catch (e) {
		return e;
	}
}
