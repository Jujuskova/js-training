'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

 function yell(str)  {
 	return str.toUpperCase();
 }


//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('Hey week end maintenant'), 'HEY WEEK END MAINTENANT')
assert.strictEqual(yell('baa'), 'BAA')
assert.strictEqual(yell('pouetpouet'), 'POUETPOUET')
assert.strictEqual(yell(''), '')
//assert.fail('You must write your own tests')
// End of tests */
