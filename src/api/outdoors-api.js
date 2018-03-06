import axios from 'axios';

import { API_BASE } from './index';
import { formatData } from './utils';

export const createOutdoor = async (fields) => {	
	const {
		paymentOptions, languagesAvailable,
	} = fields;
	const outdoor = formatData(fields);

	outdoor.paymentOptions = Array.isArray(paymentOptions) && paymentOptions.map(x => x.value);
	outdoor.languagesAvailable = Array.isArray(languagesAvailable)
								&& languagesAvailable.map(x => x.value);
    try {
		const outdoor = formatData(fields);
		const response = await axios.post(`${API_BASE}/outdoors`, { ...outdoor });
		return response;
	} catch (e) {
		return e;
	}
};

export const getOutdoors = async () => {
	try {
		const response = await axios.get(`${API_BASE}/outdoors`);
		return response.data;
	} catch (e) {
		return e;
	}
};

export const updateOutdoor = async (fields) => {
	const {
		paymentOptions, languagesAvailable,
	} = fields;

	const outdoor = formatData(fields);
	
	outdoor.paymentOptions = Array.isArray(paymentOptions) && paymentOptions.map(x => x.value);
	outdoor.languagesAvailable = Array.isArray(languagesAvailable)
								&& languagesAvailable.map(x => x.value);

	try {
		const response = await axios.put(`${API_BASE}/outdoor`, { ...outdoor });
		return response;
	} catch (e) {
		return e;
	}
}
