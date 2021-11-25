// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
	const [x, y] = [...arguments];

	// Number.isFinite() method determines whether the passed value is a finite number.
	// It checks that the type of a given value is Number, and the number is neither positive Infinity, negative Infinity, nor NaN.
	if (!Number.isFinite(x) || (!Number.isFinite(y) && y !== undefined)) {
		return;
	}
	if (y === undefined) {
		return function (z) {
			if (!Number.isFinite(z)) return;
			return z + x;
		};
	} else {
		return x + y;
	}
}

addTogether(2, 3);
