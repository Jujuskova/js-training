'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */


function cutFirst(string) {
	let newStr = string.substr(2);
	return newStr;
}

function cutLast(string) {
	let newStr1 = string.slice(0, -2);
	return newStr1;
}

function cutFirstLast(string) {
	let prem = cutFirst(string);
	let last = cutLast(prem);
	return last;
}



//* Begin of tests
const assert = require('assert')
assert.deepStrictEqual(cutFirst('Salut Frere'), 'lut Frere')
assert.deepStrictEqual(cutLast('Salut Frere'), 'Salut Fre')
assert.deepStrictEqual(cutFirstLast('Salut Frere'), 'lut Fre')
//assert.fail('You must write your own tests')
// End of tests */
