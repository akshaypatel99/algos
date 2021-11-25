// Sum All Odd Fibonacci NumbersPassed
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
	let prevNumber = 0;
	let currNumber = 1;
	let result = 0;
	while (currNumber <= num) {
		if (currNumber % 2 !== 0) {
			result += currNumber;
		}
		currNumber += prevNumber;
		prevNumber = currNumber - prevNumber;
	}

	return result;
}

// test here
sumFibs(4);

// Code Explanation
// Create a variable to keep record of the current and previous numbers along with the result that will be returned.
// Use a while loop to make sure we do not go over the number given as parameter.
// We use the modulo operand to check if the current number is odd or even. If it is odd, add it to the result.
// Complete the Fibonacci circle by rotating getting the next number and swapping values after.
// Return the result.

function sumFibs(num) {
	// Perform checks for the validity of the input
	if (num <= 0) return 0;

	// Create an array of fib numbers till num
	const arrFib = [1, 1];
	let nextFib = 0;

	// We put the new Fibonacci numbers to the front so we
	// don't need to calculate the length of the array on each
	// iteration
	while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
		arrFib.unshift(nextFib);
	}

	// We filter the array to get the odd numbers and reduce them to get their sum.
	return arrFib.filter((x) => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
sumFibs(4);

// Code Explanation
// Create an array of fibonacci numbers till num.
// Use filter() method to filter out even numbers.
// Use reduce() method to sum the remaining (odd) values.
// Return the sum.
// Note that this solution will be slower than Solution 1, as dynamically creating an array is rather slow, especially in JavaScript.
