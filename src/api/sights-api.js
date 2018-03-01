import axios from 'axios';

import { API_BASE } from './index';
import { formatData } from './utils';

export const createSight = async (fields) => {
	const {
		paymentOptions, languagesAvailable,
	} = fields;
	const sight = formatData(fields);

	sight.paymentOptions = Array.isArray(paymentOptions) && paymentOptions.map(x => x.value);
	sight.languagesAvailable = Array.isArray(languagesAvailable)
								&& languagesAvailable.map(x => x.value);
	try {
		const sights = formatData(fields);
		const response = await axios.post(`${API_BASE}/sights`, { ...sight });
		return response;
	} catch (e) {
		return e;
	}
};

export const getSights = async () => {
	try {
		const response = await axios.get(`${API_BASE}/sights`);
		return response.data;
	} catch (e) {
		return e;
	}
};

export const updateSight = async (fields) => {
	const {
		paymentOptions, languagesAvailable,
	} = fields;

	const sight = formatData(fields);

	sight.paymentOptions = Array.isArray(paymentOptions) && paymentOptions.map(x => x.value);
	sight.languagesAvailable = Array.isArray(languagesAvailable)
								&& languagesAvailable.map(x => x.value);

	try {
		const response = await axios.put(`${API_BASE}/sights`, { ...sight });
		return response;
	} catch (e) {
		return e;
	}
}