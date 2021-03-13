const express = require('express')
const app = express()
const path = require('path')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const options = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'twitap'
  }
}
const db = require('knex')(options)

db.select().from('widgets_controls')
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally((o) => {
    db.destroy()
  })

server.listen(3000)

io.on('connection', (socket) => {
  socket.on('play', (data) => {
    console.log(data)
  })

  socket.on('pause', (data) => {
    console.log(data)
  })

  socket.on('stop', (data) => {
    console.log(data)
  })
})
