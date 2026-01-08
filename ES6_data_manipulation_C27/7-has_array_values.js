export default function hasValuesFromArray(set, array) {
	let isTrue = false;
	array.map(value => {
		isTrue = (set.has(value));
	});
	return isTrue;
}