export default function createInt8TypedArray(length, position, value) {
	if (typeof length !== "number" || typeof position !== "number" || typeof value !== "number") {
		throw new TypeError("all arguments must be a numbers");
	}
	const array = new ArrayBuffer(length);
	const view = new DataView(array);
	if (position < 0 || position >= length) {
		throw new TypeError("Position outside range");
	}
	view.setInt8(position, value);
	return view;
}
