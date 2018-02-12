import axios from 'axios';

export const API_BASE = process.env.NODE_ENV === 'production' ? 'https://arezzo-server.herokuapp.com' : '';

export const getPlaceDetail = async (placeId) => {
	const details = await axios.get(`${API_BASE}/placeDetails/${placeId}`);
	return details;
};

export { createEvent, getEvents } from './events-api';
export { createFood } from './food-api';
export { createOutdoor } from './outdoors-api';
export { createShopping } from './shopping-api';
export { createSight } from './shopping-api';
