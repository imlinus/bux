import server from './../../utilities/server/index.js'
import Blockchain from './../../blockchain/source/blockchain.js'

const port = process.argv[2] || 3000
const blockchain = new Blockchain()

server.get('/', function (request, response) {
	response.send('hello')
})

server.get('/blockchain', function (request, response) {
	const output = JSON.stringify(blockchain.toString(), null, 2)
	response.send(output)
})

server.post('/transaction', function (request, response) {
	const transaction = request.body
	const index = blockchain.addToPendingTransactions(transaction)

	response.json({
		note: `transaction will be added in block ${index}.`
	})
})

server.listen(port)
