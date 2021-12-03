// Helper Function Recursion
function collectOddValues(arr) {
	let result = [];
	function helper(helperInput) {
		if (helperInput.length === 0) {
			return;
		}
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		helper(helperInput.slice(1));
	}
	helper(arr);
	return result;
}

// Pure Recursion
function collectOddValues(arr) {
	let result = [];
	if (arr.length === 0) {
		return result;
	}
	if (arr[0] % 2 !== 0) {
		result.push(arr[0]);
	}
	return result.concat(collectOddValues(arr.slice(1)));
}
