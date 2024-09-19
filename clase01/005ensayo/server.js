const http = require('node:http')

const server = http.createServer (req, res) => {
    console.log('Servidor iniciado')
    res.end('Hola!')
}