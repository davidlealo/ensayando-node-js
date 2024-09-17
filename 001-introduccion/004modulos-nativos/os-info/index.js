const os = require('node:os')

console.log('Información del SISTEMA OPERATIVO')
console.log('____________________________________')

console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('Memoria libre', os.freemem() / 1024 / 1024) // la dividión por / 1024*2 es para obtener los megas
console.log('Memoria total', os.totalmem / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)

console.log('CPUs del SISTEMA OPERATIVO')
console.log('____________________________________')
console.log('Número de CPUs', os.cpus().length)
console.log('CPUs', os.cpus())