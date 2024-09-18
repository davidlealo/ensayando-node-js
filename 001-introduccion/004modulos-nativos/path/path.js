//Módulo nativo: path
const path = require('node:path')

// Esto nos sirve para construir nuevas rutas
// Crear rutas absolutas, etc

console.log('El separador de carpetas de tu sistema operativo es:', path.sep) // Barra separadora de carpeta según OS
console.log('========================================')

// unir rutas con path.join
console.log('Unir rutas con path.join')

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)
console.log('========================================')


//Obtener el nombre del fichero
console.log('Obtener el nombre del fichero')
const base = path.basename('/tmp/mycarpeta/password.txt')
console.log(base)
console.log('========================================')

//Obtener el nombre del fichero sin la extensión
console.log('Obtener el nombre del fichero sin extensión')
const filename = path.basename('/tmp/mycarpeta/password.txt', '.txt')
console.log(filename)
console.log('========================================')

//Obtener la extensión
console.log('Obtener la extensión')
const extension = path.extname('image.jpg')
console.log(extension)
console.log('========================================')