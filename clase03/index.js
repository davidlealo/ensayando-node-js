const express = require('express')

app = express()

app.get('/', (req, res) => {
    console.log('inicio en /')
    res.end('<h1>Mi sitio</h1>')
})

app.listen(3000, () => {
    console.log('listening server')
})