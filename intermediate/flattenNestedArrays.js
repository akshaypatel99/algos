// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
	function flatDeep(arr, depth = 1) {
		return depth > 0
			? arr.reduce(
					(acc, val) =>
						acc.concat(Array.isArray(val) ? flatDeep(val, depth - 1) : val),
					[]
			  )
			: arr.slice();
	}

	return flatDeep(arr, Infinity);
}

steamrollArray([1, [2], [3, [[4]]]]);

function steamrollArray(arr) {
	const flat = [].concat(...arr);
	return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
