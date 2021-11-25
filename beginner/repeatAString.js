// Repeat a String Repeat a StringPassed
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
	var accumulatedStr = '';

	while (num > 0) {
		accumulatedStr += str;
		num--;
	}

	return accumulatedStr;
}
// Code Explanation
// Create an empty string variable to store the repeated word.
// Use a while loop or for loop to repeat code as many times as needed according to num
// Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
// At the end of the loop, return the variable for the repeated word.

function repeatStringNumTimes(str, num) {
	if (num < 1) {
		return '';
	} else {
		return str + repeatStringNumTimes(str, num - 1);
	}
}
// Code Explanation
// This solution uses recursion.
// We check if num is negative and return an empty string if true.
// If not, we add the string to a call of our function with num being decreased by 1, which will add another str and another… until eventually num is 1. And return that whole process.

// Recursive Solution

function repeatStringNumTimes(str, num) {
	return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
