import Block from './block.js'
import Transaction from './transaction.js'
import uuid from './../../utilities/uuid/index.js'

export default class Blockchain {
	constructor() {
		this.chain = [this.createInitialBlock()] // all blocks will be stored here
		this.pendingTransactions = []
		this.networkNodes = []
		this.createNewBlock(null, null) // genesis block
	}

	createNewBlock (previousHash, hash) {
		const block = new Block({
			index: this.chain.length + 1,
			timestamp: Date.now(),
			data: this.pendingTransactions,
			hash,
			previousHash
		})

		this.pendingTransactions = []
		this.chain.push(block)

		return block
	}

	getLatestBlock () {
		return this.chain[this.chain.length - 1]
	}

	createNewTransaction ({ amount, to, from }) {
		return new Transaction({
			id: uuid(),
			amount,
			to,
			from
		})
	}

	addToPendingTransactions (transaction) {
		this.pendingTransactions.push(transaction)
		return this.getLatestBlock()['index'] + 1
	}

	generateBlock (address) {
		let block = new Block({
			timestamp: Date.now(),
			data: this.pendingTransactions,
			previousHash: this.getLatestBlock().hash
		})

		let algorithm = new ProofOfInvolvment(block)
		block.validator = address
		block = algorithm.generateBlock()
		block.block = this.chain.length

		this.chain.push(block)
		this.pendingTransactions = []
	}

	addBlock (block) {
		block.previousHash = this.getLatestBlock().hash // add last blocks hash
		block.hash = block.generateHash() // update our current hash

		this.chain.push(block) // add block to the chain
	}

	toString () {
		return JSON.parse(JSON.stringify(this.chain))
	}
}

/*
isInitialBlockValid () {
	// create fresh instance of the genesis block
	const real = JSON.stringify(this.createInitialBlock())

	// see if it matches the first block in our chain
	if (real !== JSON.stringify(this.chain[0])) {
		return false
	}

	return true
}

isBlockchainValid () {
	// first check if the 'genesis' block is original
	this.isInitialBlockValid()

	// then make sure the other blocks are okay
	for (let i = 1; i < this.chain.length; i++) {
		const currentBlock = this.chain[i]
		const previousBlock = this.chain[i - 1]

		// hash signatures should match
		if (currentBlock.hash !== currentBlock.generateHash()) {
			return false
		}

		// hash signatures should also match with previous block
		if (previousBlock.hash !== currentBlock.previousHash) {
			return false
		}

		// and the block should have valid transactions
		// if (!currentBlock.hasValidTransactions()) {
		// 	return false
		// }
	}

	return true
}
*/
