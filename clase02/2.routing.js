const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
    console.log('procesamos una request')
    const { method, url } = req

    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('content-type', 'application/json; charset=utf-8')
                    return res.end(JSON.stringify(dittoJSON))
                default:
                    res.statusCode = 404
                    res.setHeader('content-type', 'text/html; charset=utf-8')
                    return res.end('<h1>404</h1>')
            }
        case 'POST':
            switch (url) {
                case '/pokemon':
                    let body =
    }
    }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
    console.log('Servidor iniciado')
})

/*
Métodos HTTP
https://developer.mozilla.org/es/docs/Web/HTTP/Methods

*/
