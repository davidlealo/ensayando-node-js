const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('content-type', 'text/html, charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200
    res.end('<h1>Bienvenido al inicio de mi sitio web</h1>')
}
  else if (req.url === '/imagen.png') {

    fs.readFile('./place.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('content-type', 'image/png')
        res.end(data)
      }
    })
}

  else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
