// List prime numbers up to a given number

function isPrime(num) {
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i == 0) return false;
	}
	return true;
}

function primeNumbersUpTo(num) {
	let primeArray = [];
	for (let i = 2; i <= num; i++) {
		if (isPrime(i)) {
			primeArray.push(i);
		}
	}
	return primeArray;
}

console.log(primeNumbersUpTo(100));
