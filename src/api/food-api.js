import axios from 'axios';

import { API_BASE } from './index';
import { formatData } from './utils';

export const createFood = async (fields) => {
	const {
		paymentOptions, languagesAvailable,
	} = fields;
	const food = formatData(fields);

	food.paymentOptions = Array.isArray(paymentOptions) && paymentOptions.map(x => x.value);
	food.languagesAvailable = Array.isArray(languagesAvailable)
								&& languagesAvailable.map(x => x.value);
	try {
		const food = formatData(fields);
		const response = await axios.post(`${API_BASE}/foods`, { ...food });
		return response;
	} catch (e) {
		return e;
	}
};

export const getFoods = async () => {
	try {
		const response = await axios.get(`${API_BASE}/foods`);
		return response.data;
	} catch (e) {
		return e;
	}
};

export const updateFood = async (fields) => {
	const {
		paymentOptions, languagesAvailable,
	} = fields;
	const food = formatData(fields);

	food.paymentOptions = Array.isArray(paymentOptions) && paymentOptions.map(x => x.value);
	food.languagesAvailable = Array.isArray(languagesAvailable)
								&& languagesAvailable.map(x => x.value);
	try {
		const food = formatData(fields);
		const response = await axios.put(`${API_BASE}/foods`, { ...food });
		return response;
	} catch (e) {
		return e;
	}
};
