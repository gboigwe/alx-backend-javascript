/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function guardrall(mathFunction) {
	const queue = [];
	let result;
	try {
		result = mathFunction();
	}
	catch (err) {
		result = `Error: ${err.message}`;
	}
	queue.push(result);
	queue.push('Guardrall was processed');

	return queue;
}
