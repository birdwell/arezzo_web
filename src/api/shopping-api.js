import axios from 'axios';

import { API_BASE } from './index';
import { formatData } from './utils';

export const createShopping = async (fields) => {
	const {
		paymentOptions, languagesAvailable,
	} = fields;
	const shopping = formatData(fields);

	shopping.paymentOptions = Array.isArray(paymentOptions) && paymentOptions.map(x => x.value);
	shopping.languagesAvailable = Array.isArray(languagesAvailable)
								&& languagesAvailable.map(x => x.value);
	try {
		const shopping = formatData(fields);
		const response = await axios.post(`${API_BASE}/shopping`, { ...shopping });
		return response;
	} catch (e) {
		return e;
	}
};

export const getShopping = async () => {
	try {
		const response = await axios.get(`${API_BASE}/shopping`);
		return response.data;
	} catch (e) {
		return e;
	}
};

export const updateShopping = async (fields) => {
	const {
		paymentOptions, languagesAvailable,
	} = fields;

	const shopping = formatData(fields);

	shopping.paymentOptions = Array.isArray(paymentOptions) && paymentOptions.map(x => x.value);
	shopping.languagesAvailable = Array.isArray(languagesAvailable)
								&& languagesAvailable.map(x => x.value);

	try {
		const response = await axios.put(`${API_BASE}/shopping`, { ...shopping });
		return response;
	} catch (e) {
		return e;
	}
}