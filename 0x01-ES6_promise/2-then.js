/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function handleResponseFromAPI(promise) {
	return new Promise((resolve, reject) => {
		if (promise) {
			resolve({
				status: 200,
				body: 'Success'
			});
		}
		else {
			reject();
		}
	})
}
export default function handleResponseFromAPI(promise) {
	return promise
	.then(() => {
		return{status: 200, body: 'Success'};
	})
	.catch(() => {
		return new Error();
	});
	.finally(() => {
		console.log("Got a response from the API");
	});
}
