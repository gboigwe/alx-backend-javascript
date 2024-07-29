/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function divideFunction(numerator, denominator) {
	try {
		if (denominator === 0) {
			throw new Error();
		}
		const result = numerator / denominator;
	}
	catch (err) {
		throw Error('cannot divide by 0');
	}
}
