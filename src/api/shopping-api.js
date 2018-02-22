import axios from 'axios';

import { API_BASE } from './index';
import { formatData } from './utils';

export const createShopping = async (fields) => {
	try {
		const shopping = formatData(fields);
		const response = await axios.post(`${API_BASE}/shopping`, { ...shopping });
		return response;
	} catch (e) {
		return e;
	}
};