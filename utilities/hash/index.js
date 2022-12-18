export default function hash (text) {
	let hash = 309_485_009_821_345_068_724_781_371n
	let prime = 144_066_263_297_769_815_596_495_629_667_062_367_629n

	for (let index = 0; index < text.length; index++) {
		let characterCode = text.charCodeAt(index)

		hash ^= BigInt(characterCode)
		hash = BigInt.asUintN(128, hash * prime)
	}

	return String(hash)
}
