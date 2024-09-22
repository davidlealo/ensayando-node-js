const express = require('express')

const app = express()

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
  console.log('Hola mundo')
  res.status(200).send('<h1>Mi página</j1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
