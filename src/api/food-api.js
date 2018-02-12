import axios from 'axios';

import { API_BASE } from './index';
import { formatData } from './utils';

export const createFood = async (fields) => {
	try {
		const food = formatData(fields);
		const response = await axios.post(`${API_BASE}/foods`, { ...food });
		return response;
	} catch (e) {
		return e;
	}
};
