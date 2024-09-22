const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.get('/pokemon/ditto', (req, res) => {
  console.log('Cargaste correctamente la  ruta "/pokemon/ditto" de tu sitio')
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
})

app.use((req, res) => {
  res.status(404).end('<h1>Error 404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
