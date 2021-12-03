// Countdown recursively prints a countdown from a given number to 0.

function countdown(num) {
	return num === 0 ? console.log(0) : console.log(num) && countdown(num - 1);
}

function countdown(num) {
	if (num <= 0) {
		console.log('All done!');
		return;
	}
	console.log(num);
	num--;
	countdown(num);
}
