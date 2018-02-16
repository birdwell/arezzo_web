import axios from 'axios';

import { API_BASE } from './index';
import { formatData } from './utils';

export const createOutdoor = async (fields) => {	
    try {
		const outdoor = formatData(fields);
		const response = await axios.post(`${API_BASE}/outdoor`, { ...outdoor });
		return response;
	} catch (e) {
		return e;
	}
};
