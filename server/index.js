const express = require('express')
const next = require('next')
const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
require('dotenv').config()

const main = async () => {
	await app.prepare()
	const server = express()
	server.get('*', (req, res) => handle(req, res))

	server.listen(port, (err) => {
		if (err) throw err
		console.log(`> Ready on ${process.env.BASE_URL}:${port}`)
	})
}

try {
	main()
} catch (e) {
	console.error(e)
}
