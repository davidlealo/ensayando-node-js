const express = require('express')
app = express()
const movies = require('./movies.json')
app.disable('x-powered-by')

app.get('/', (req, res) => {
    res.json({message: 'Hola mundo'})
})

app.get('/movies', (req, res) =>{
    res.json(movies)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () =>{
    console.log(`server listening on port http://localhost:${PORT}`)
})
