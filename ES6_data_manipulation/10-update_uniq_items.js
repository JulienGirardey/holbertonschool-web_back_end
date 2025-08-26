export default function updateUniqueItems(map) {
	if (!(map instanceof Map)) {
		throw new TypeError("the argument must be a Map");
	}
	for (const [key, value] of map.entries()) {
		if (value === 1) {
			map.set(key, 100);
		}
	}
	return map;
}
