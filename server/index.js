const express = require('express')
const app = express()
// TODO: add env
const PORT = 8080

const http = require('http').Server(app)
const cors = require('cors')

app.use(cors())

const socketIO = require('socket.io')(http, {
    cors: {
        // TODO: get this from env
        origin: 'http://localhost:5050'
    }
})

socketIO.on('connection', (socket) => {
    console.log(`⚡️ ${socket.id} user just connected!`)
    socket.on('disconnetct', () => {
        console.log(`⚡️ ${socket.id} user disconnected!`)
    })
})

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello world!'
    })
})

http.listen(PORT, () => {
    console.log(`🚀 Server listening on ${PORT}!`)
})