export default class ProofOfInvolvment {
	constructor(block) {
		this.block = block
	}

	generateHash () {
		return SHA256(this.block.previousHash + this.block.timestamp + JSON.stringify(this.block.transactions) + this.block.validator).toString();
	}

	generateBlock () {
		this.block.hash = this.generateHash()
		console.log('Block generated:' + this.block.hash)

		return this.block
	}
}
