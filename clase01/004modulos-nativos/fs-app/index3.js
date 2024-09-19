const fs = require('node:fs')

console.log('leyendo el primer archivo...')
const txt = fs.readFile('./hola.txt', 'utf-8', (err, txt)=>{
    console.log(txt)
})

console.log('Puedo hacer cosas por mientras')

console.log('leyendo el segundo archivo...')
const text = fs.readFile('./lista.txt', 'utf-8', (err, text)=>{
    console.log(text)
})

