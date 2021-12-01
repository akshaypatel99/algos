// Check if a string is alphanumeric with RegExp

function isAlphanumeric(str) {
	return /^[a-z0-9]+$/i.test(str);
}

// Check if a string is alphanumeric without RegExp - Faster than RegExp
function isAlphanumeric(str) {
	let code;

	for (let char of str) {
		code = char.charCodeAt(0);
		if (
			!(code > 47 && code < 58) && // numeric (0-9)
			!(code > 64 && code < 91) && // upper alpha (A-Z)
			!(code > 96 && code < 123) // lower alpha (a-z)
		) {
			return false;
		}
	}

	return true;
}
