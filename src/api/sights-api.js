import axios from 'axios';

import { API_BASE } from './index';
import { formatData } from './utils';

export const createSights = async (fields) => {
	try {
		const sights = formatData(fields);
		const response = await axios.post(`${API_BASE}/sights`, { ...sights });
		return response;
	} catch (e) {
		return e;
	}
};