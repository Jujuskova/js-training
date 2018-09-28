'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */


function keepFirst(string) {
	let newStr = string.substr(0, 2);
	return newStr;
}

function keepLast(string) {
	let newStr1 = string.slice(-2);
	return newStr1;
}

function keepFirstLast(string) {
	let newStr2 = string.substr(2, 2);
	return newStr2;
}

//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(keepFirst('Salut Frere'), 'Sa')
assert.deepStrictEqual(keepLast('Salut Frere'), 're')
assert.deepStrictEqual(keepFirstLast('Salut Frere'), 'lu')
// End of tests */
