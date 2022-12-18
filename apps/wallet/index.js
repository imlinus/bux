import server from './../../utilities/server/index.js'

server.get('/', (request, response) => {
	response.send('hello')
})

server.listen(3000)
