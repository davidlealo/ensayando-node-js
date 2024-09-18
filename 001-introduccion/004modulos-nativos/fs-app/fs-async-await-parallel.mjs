import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./hola.txt', 'utf-8'),
    readFile('./lista.txt', 'utf-8')
]).then(([first, second])=>{
    console.log(first)
    console.log(second)
})

/*

//IIFE - Inmediatly Invoked Function Expression
//(()=>{})()

(
    async () => {
        console.log('leyendo el primer archivo...')
        const txt = await fs.readFile('./hola.txt', 'utf-8',).then(txt => {
            console.log(txt)
        })

        console.log('Puedo hacer cosas por mientras')

        console.log('leyendo el segundo archivo...')
        const text = await fs.readFile('./lista.txt', 'utf-8').then(text => {
            console.log(text)
        })
    })()
*/