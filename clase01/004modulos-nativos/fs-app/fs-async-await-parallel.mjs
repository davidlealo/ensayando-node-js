import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./hola.txt', 'utf-8'),
    readFile('./lista.txt', 'utf-8')
]).then(([first, second])=>{
    console.log(first)
    console.log(second)
})