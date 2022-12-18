import hash from './../../utilities/hash/index.js'

export default class Block {
	constructor({ timestamp, data, previousHash }) {
		this.timestamp = timestamp
		this.data = data
		this.previousHash = previousHash
		this.hash = this.generateHash()
	}

	generateHash () {
		const data = `${this.timestamp}${this.previousHash}${JSON.stringify(this.data)}`
		const block = JSON.stringify(data)

		return hash(block)
	}

	toString () {
		return JSON.parse(JSON.stringify(this))
	}
}
