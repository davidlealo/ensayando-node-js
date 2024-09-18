const fs = require('node:fs/promises'); // Tuve que poner el ; para que funcionara

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
