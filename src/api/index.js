import axios from 'axios';

export const API_BASE = process.env.NODE_ENV === 'production' ? 'https://arezzo-server.herokuapp.com' : '';

export const getPlaceDetail = async (placeId) => {
	const details = await axios.get(`${API_BASE}/placeDetails/${placeId}`);
	return details;
};

export { createEvent, getEvents, updateEvent} from './events-api';
export { createFood, getFoods, updateFood } from './food-api';
export { createOutdoor, getOutdoors, updateOutdoor } from './outdoors-api';
export { createShopping, getShopping, updateShopping } from './shopping-api';
export { createSight, getSights, updateSights } from './sights-api';
