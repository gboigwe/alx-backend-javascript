/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(777);
		}, 500);
	});
}
