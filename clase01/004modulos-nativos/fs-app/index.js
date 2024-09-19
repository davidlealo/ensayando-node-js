const fs = require('node:fs') // Importar módulo de filesystem

const stats = fs.statSync('./hola.txt')

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es enace simbólico
    stats.size, // tamaño en bytes
)