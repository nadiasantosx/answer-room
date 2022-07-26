const express = require('express') // importa o express
const route = require('./route') // importa roue
const path = require('path')

const server = express() // executa o express e guarda no server

server.set('view engine', 'ejs') // apontando pro server que a view engine é o ejs

server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public"))

server.use(route) // usar o route

server.listen(3000, () => console.log('RODANDO'))
