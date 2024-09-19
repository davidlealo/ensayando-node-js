const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('Servidor iniciado')
    res.end('Hola!')
})

server.listen(0, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`)
  })

  http.get(`http://localhost:${server.address().port}`, (res) => {
    console.log(`STATUS: ${res.statusCode}`)
  })