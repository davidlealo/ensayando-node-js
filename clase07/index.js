import express from 'express'
import {PORT} from './config.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Estas en /')
})

app.listen(PORT, () =>{
    console.log(`Server running in port ${PORT}`)
})