import words from './words.js'

function getRandomWord (seedPhrase) {
	const random = Math.floor(Math.random() * words.length)
	const randomWord = words[random]

	return seedPhrase.includes(randomWord)
		? getRandomWord(seedPhrase)
		: randomWord
}

export default function seedPhrase (length = 12) {
	let seedPhrase = []

	for (let i = 0; i < length; i++) {
		let randomWord = getRandomWord(seedPhrase)
		seedPhrase.push(randomWord)
	}

	return seedPhrase
}
