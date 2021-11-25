// Smallest Common Multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	let newArr = [];
	for (let i = min; i <= max; i++) {
		newArr.push(i);
	}

	let common = false;
	let n = 0;

	function isLowest(num) {
		return n % num === 0;
	}

	while (common === false) {
		n += max;
		common = newArr.every((el) => isLowest(el));
	}

	return n;
}
