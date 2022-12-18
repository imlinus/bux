function move(array, from, to) {
	const clone = [...array]
	const moved = clone.splice(from, 1)[0]

	clone.splice(to, 0, moved)

	return clone
}

function scramble(array) {
	return move(array, 1, 4).reverse()
}

function unscramble(array) {
	return move(array.reverse(), 4, 1)
}

const seedPhrase = ["interest", "rate", "rising", "bullish", "investor", "bankrupt"]

const scrambled = scramble(seedPhrase)
console.log(scrambled) // [ 'bankrupt', 'rate', 'investor', 'bullish', 'rising', 'interest' ]

const unscrambled = unscramble(scrambled)
console.log(unscrambled) // [ 'interest', 'rate', 'rising', 'bullish', 'investor', 'bankrupt' ]
