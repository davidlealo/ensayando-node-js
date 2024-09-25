const express = require('express')
const crypto = require('node:crypto')
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
    const movieSchema = z.object({
        tittle: z.string({
            invalid_type_error: "Movie tittle must be a string",
            required_error: "Movie tittle is require",
        }),
        year: z.number().int().min(1900).max(2025),
        director: z.string(),
        duration: z.number().int().positive(),
        rate: z.number().min(0).max(10),
        // poster: z.string().url().endsWith('.jpg'),
        poster: z.string().url().endsWith({
            message: "Poster must be a valid URL"
        }),
        genre: z.array(
            z.enun(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-fi']),
            {
                required_error: 'Movie genre is required',
                invalid_type_error: 'Movie genre must be an array of enum Genre'
            }
        )
    })
    const {
        tittle,
        genre,
        director,
        year,
        duration,
        rate,
        poster
    } = req.body

    const newMovie = {
        id: crypto.randomUUID(), // uuid v4
        tittle,
        genre,
        director,
        year,
        duration,
        rate: rate ?? 0,
        poster
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
