// Seek and DestroyPassed
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {
	var valsToRemove = Array.from(arguments).slice(1);
	return arr.filter(function (val) {
		return !valsToRemove.includes(val);
	});
}

function destroyer(arr, ...valsToRemove) {
	return arr.filter((elem) => !valsToRemove.includes(elem));
}
