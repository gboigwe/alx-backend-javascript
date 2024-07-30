/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function updateUniqueItems(items) {
	if (!(items instanceof Map)) {
		throw new Error('Cannot process');
	}
	for (const [key, value] of items) {
		if (value === 1) {
			items.set(key, 100);
		}
	}
	return items;
}
