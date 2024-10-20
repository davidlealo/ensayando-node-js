import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
    res.send('Estas en /')
})

app.listen(PORT, () =>{
    console.log(`Server running in port ${PORT}`)
})