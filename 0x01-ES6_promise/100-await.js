/* eslint-disable no-unused-vars */
/* eslint-disable */
import uploadPhoto from './utils.js';
import createUser from './utils.js';

export default async function asyncUploadUser() {
	let user;
	let photo;
	try {
		photo = await uploadPhoto();
		user = await createUser();
	}
	catch (err) {
		photo = null;
		user = null;
	}
	return { photo, user };
}
