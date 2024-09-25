const express = require('express')
const { validateMovie, validatePartialMovie } = require('./schemas/movies')
app = express()
app.use(express.json())
const movies = require('./movies.json')
const z = require('zod')
app.disable('x-powered-by')

app.get('/', (req, res) => {
    res.json({message: 'Hola mundo'})
})

// Todas las películas
app.get('/movies', (req, res) =>{
    // películas por género
    const { genre } = req.query
    if (genre) {
        const filteredMovies = movies.filter(
            // movie => movie.genre.includes(genre) así queda key sensitive
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
        return res.json(filteredMovies)
    }
    res.json(movies)
})

// Películas por id
app.get('/movies/:id', (req, res) =>{
    const { id } = req.params
    const movie = movies.find( movie => movie.id === id)
    if (movie) return res.json(movie)

    res.status(404).json({message: 'Movie not found'})
})

app.post('/movies', (req, res) => {
    const result = validateMovie(req.body)

    if (!result.success) {
        // 422 Unprocessable Entity
        return res.status(400).json({ error: JSON.parse(result.error.message) })
      }
    
    const newMovie = {
        id: crypto.randomUUID(), // uuid v4
        ...result.data
    }

    // Esto no sería REST porque estamos guardando
    // el estado de la aplicación en memoria
    movies.push(newMovie)

    res.status(201).json(newMovie) // actualiza la caché del cliente

})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () =>{
    console.log(`server listening on port http://localhost:${PORT}`)
})
