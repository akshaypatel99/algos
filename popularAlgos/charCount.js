// Count the characters in a string.

function charCount(str) {
	let obj = {};
	let newStr = str.toLowerCase().split('');
	let strArr = newStr.filter((el) => el.match(/[a-z0-9]/));

	for (let i = 0; i < strArr.length; i++) {
		let letter = strArr[i];
		if (obj[letter]) {
			obj[letter]++;
		} else {
			obj[letter] = 1;
		}
	}
	return obj;
}

function charCount(str) {
	let obj = {};

	for (let char of str) {
		if (/[a-z0-9]/.test(char)) {
			char = char.toLowerCase();
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

charCount('hello');
charCount('Hi there!');
