const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''

//   // escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la información en el req.body
//     req.body = data
//     next()
//   })
// })

app.post('/pokemon', (req, res) => {
// req.body deberíamos guardar en bbdd
  res.status(201).json(req.body)
  console.log('Cargaste correctamente la  ruta "/pokemon/ditto" de tu sitio')
})

app.use((req, res) => {
  res.status(404).end('<h1>Error 404</h1>')
  console.log('Error 404')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
