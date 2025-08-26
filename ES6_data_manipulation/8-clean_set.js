export default function cleanSet(set, startString) {
	if (typeof startString !== "string") {
		throw new TypeError("the last argument must be a String");
	}
	if (!(set instanceof Set)) {
		throw new TypeError("the first argument must be a Set");
	}
	if (!startString) {
		return "";
	}
	return [...set]
	.filter(value => value.startsWith(startString))
	.map(value => value.slice(startString.length))
	.join('-');
}
