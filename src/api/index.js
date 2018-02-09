import axios from 'axios';

const API_BASE = process.env.NODE_ENV === 'production' ? 'https://arezzo-server.herokuapp.com' : '';

export const getPlaceDetail = async (placeId) => {
	debugger;
	const placeDetails = await axios.get(`${API_BASE}/placeDetails/${placeId}`);
	return placeDetails;
};
