import Blockchain from './source/blockchain.js'
import Block from './source/block.js'

const blockchain = new Blockchain()

bux.addBlock(new Block({
	timestamp: Date.parse('2023-01-02'),
	data: {
		foo: 'bar'
	}
}))

bux.addBlock(new Block({
	timestamp: Date.parse('2023-01-02'),
	data: {
		hello: 'world'
	}
}))

/*
console.log('is chain valid?', bux.isBlockchainValid())
bux.chain[1].data.foo = 'rab'
bux.chain[1].hash = bux.chain[1].generateHash()
console.log('is chain valid?', bux.isBlockchainValid())
*/

console.log('Blockchain', blockchain.toString())
