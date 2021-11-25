// Spinal Tap CasePassed
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
	// "It's such a fine line between stupid, and clever."
	// --David St. Hubbins

	return str
		.split(/\s|_|(?=[A-Z])/)
		.join('-')
		.toLowerCase();
}
