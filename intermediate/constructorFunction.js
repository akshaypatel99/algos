// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

const Person = function (firstAndLast) {
	let firstName = firstAndLast.split(/\s/)[0];
	let lastName = firstAndLast.split(/\s/)[1];

	this.getFirstName = function () {
		return firstName;
	};
	this.getLastName = function () {
		return lastName;
	};
	this.getFullName = function () {
		return `${firstName} ${lastName}`;
	};

	this.setFirstName = function (first) {
		return (firstName = first);
	};
	this.setLastName = function (last) {
		return (lastName = last);
	};
	this.setFullName = function (firstAndLast) {
		firstName = firstAndLast.split(/\s/)[0];
		lastName = firstAndLast.split(/\s/)[1];
		return;
	};

	return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
