console.log('Hola Mundo!')
console.info('Hola info')
console.error('Hola error')

/* 
Node JS no tiene el Windows como sería al ejecutar JS desde el navegador.
El equivalente en Node es Global.
Pero tenemos es un objeto que se llama GlobalThis que sirve
para navegador y desktop.
Desde GlobalThis sale todo, incluso console.log es GlobalThis.console.log()
*/

console.log(globalThis)
