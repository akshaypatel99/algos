// Reverse a StringPassed
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
	for (var reversedStr = '', i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}
	return reversedStr;
}

// Code Explanation
// Starting at the last character of the string passed to the function, you build a new string reversedStr from str.

// During each iteration of the for loop, reversedStr gets concatenated with itself and the current character.

// Finally, you return the final value of reversedStr.

function reverseString(str) {
	return str.split('').reverse().join('');
}

// Code Explanation
// Our goal is to take the input, str, and return it in reverse. Our first step is to split the string by characters using split(''). Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character.

// Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.

// Next we chain the reverse() function, which takes our array of characters and reverses them.

// Finally, we chain join('') to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.
