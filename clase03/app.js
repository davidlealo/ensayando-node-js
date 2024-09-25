const express = require('express')
app = express()
const movies = require('./movies.json')
app.disable('x-powered-by')

app.get('/', (req, res) => {
    res.json({message: 'Hola mundo'})
})

// Todas las películas
app.get('/movies', (req, res) =>{
    res.json(movies)
})

// Películas por id
app.get('/movies/:id', (req, res) =>{
    const { id } = req.params
    const movie = movies.find( movie => movie.id === id)
    if (movie) return res.json(movie)

    res.status(404).json({message: 'Movie not found'})
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () =>{
    console.log(`server listening on port http://localhost:${PORT}`)
})
