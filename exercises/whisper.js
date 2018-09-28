'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

function whisper(str)  {
	if (str === '') {
		return '';
	}
	let bla = ("* " + str.toLowerCase() + " *");
 	return bla;
 }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(whisper('HEY WEEK END MAINTENANT'),'* hey week end maintenant *' )
assert.strictEqual(whisper('BAA'), '* baa *')
assert.strictEqual(whisper('PLOPPLOP'), '* plopplop *')
assert.strictEqual(whisper(''), '')
// End of tests */
