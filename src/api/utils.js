export const createContactInfo = (data) => {
	const {
		phoneNumber, address, website, mediaLinks,
	} = data;

	const newData = { ...data };

	delete newData.phoneNumber;
	delete newData.address;
	delete newData.website;
	delete newData.mediaLinks;

	newData.contactInfo = {
		phoneNumber,
		address,
		website,
		mediaLinks: mediaLinks.split(','),
	};
	return newData;
};

export const removeGoogleApiData = (data) => {
	const newData = { ...data };
	/* From Google Api */
	delete newData.icon;
	delete newData.id;
	delete newData.name;
	delete newData.photos;
	delete newData.rating;
	delete newData.reviews;
	delete newData.types;
	return newData;
};

export const formatData = (data) => {
	return removeGoogleApiData(createContactInfo(data));
};
