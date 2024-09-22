const express = require('express')

const app = express()

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  console.log('Cargaste correctamente la  ruta "/" de tu sitio')
  res.send('<h1>Mi página</j1>')
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

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
