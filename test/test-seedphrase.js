// https://github.com/hujiulong/web-bip39/blob/master/src/index.ts
// https://github.com/bitpay/bitcore/blob/master/packages/bitcore-mnemonic/lib/mnemonic.js
// https://github.com/bitcoinjs/bip39/blob/master/src/index.js

import generate from './../utilities/seedphrase/index.js'
import words from './../utilities/seedphrase/words.js'
import hash from './../utilities/hash/index.js'

/*
function testForDublicates() {
	const hasDuplicates = array => array.length !== new Set(array).size

	for (let i = 0; i < 9999; i++) {
		const seedPhrase = generate()

		if (hasDuplicates(seedPhrase)) {
			console.log('fail', seedPhrase)
		}
	}
}
*/

function lpad (str, padString, length) {
	while (str.length < length) {
		str = padString + str
	}

	return str
}

function binaryToByte (bin) {
	return parseInt(bin, 2)
}

function bytesToBinary (bytes) {
	return bytes.map((x) => lpad(x.toString(2), '0', 8)).join('');
}

const seedPhrase = generate(6)
console.log(seedPhrase)

// const word = seedPhrase[1]
// let characterCodes = ''

// console.log(word)
// console.log(hash(String(Date.now()) + 'Hello'))

const bits = seedPhrase.map(word => {
	const index = words.indexOf(word)

	if (index === -1) {
		throw new Error('invalid')
	}

	return lpad(index.toString(2), '0', 11)
})

console.log(bits)

/*
const entropyBits = bytesToBinary(Array.from(entropy));
const checksumBits = deriveChecksumBits(entropy);
const bits = entropyBits + checksumBits;

console.log(bits)
*/

// const chunks = bits.match(/(.{1,11})/g)

// console.log(chunks)

/*
const words = chunks.map(binary => {
	const index = binaryToByte(binary)
	return words[index]
})
*/

/*
for (let i = 0; i < word.length; i++) {
	// let string = String(word.charCodeAt(0)).slice(1) + String(word.charCodeAt(1)).slice(1)
	// console.log(string)
	characterCodes += String(word.charCodeAt(i))
}
*/

// console.log(characterCodes)
// console.log(hash(characterCodes))
