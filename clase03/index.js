const express = require('express')

app = express()

app.get('/', (req, res) => {
    console.log('inicio en /')
})

app.listen(3000, () => {
    console.log('listening server')
})