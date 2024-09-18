const fs = require('node:fs')
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)

console.log('leyendo el primer archivo...')
const txt = readFilePromise('./hola.txt', 'utf-8').then(txt =>{
    console.log(txt)
})

console.log('Puedo hacer cosas por mientras')

console.log('leyendo el segundo archivo...')
const text = readFilePromise('./lista.txt', 'utf-8').then(text=>{
    console.log(text)
})

