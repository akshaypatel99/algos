function cascade(number) {
	// Your code here!
	if (number === undefined) return;
	let str = number.toString();
	console.log(Number(str));
	if (str.length === 1) return;
	cascade(str.slice(0, -1));
	console.log(Number(str));
}

// Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - this very challenging problem can be solved with and without string manipulation!

// cascade(12345) should print

// 12345
// 1234
// 123
// 12
// 1
// 12
// 123
// 1234
// 12345

// // Uncomment to test your work!
cascade(111);
// should print
/*
111
11
1
11
111
*/
