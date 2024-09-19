const fs = require('node:fs')

const text = fs.readFileSync('./hola.txt', 'utf-8')

console.log(text)