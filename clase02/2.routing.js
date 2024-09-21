const http = require('node:http')

const processRequest = (req, res) => {
  console.log('procesamos una request')
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('Servidor iniciado')
})

/*
Métodos HTTP
https://developer.mozilla.org/es/docs/Web/HTTP/Methods

*/
