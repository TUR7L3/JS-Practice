function add (x,y) {
	return x+y;
}

function subtract (x,y) {
	return x-y;
}

function sum (numArr) {
	let result = 0;
	for (num in numArr){
		result += numArr[num];
	}
	return result;
}

function multiply (numArr) {
	let result = 1;
	for(num in numArr){
		result = numArr[num] * result;
	}
	return result;
}

function power(x,y) {
	return x**y;
}

function factorial(x) {
	let result = 1;
	for(let i = x; i > 0; i--){
		result *= i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}