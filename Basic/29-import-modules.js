/*
Clase 44 - Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=21480
*/

// Importación de módulos

import { add, PI, name, Circle } from "./28-export-modules.js"//No son por exportadas default y hay que hecer refrencia a cada una de las vbles./funciones

import defaultImport from "./28-export-modules.js"//Al importar el archivo vienen por defecto la funcion que le indico que sea export default. 
// En este caso no es necesario hacer referencia a ella. Se puede ver que el nombre da igual, se puede definir aqui como querramos.

// Funciones

console.log(add(5, 10))

// Propiedades

console.log(PI)
console.log(name)

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importación por defecto

console.log(defaultImport(5, 10))

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular

// import { MyImport } from "./directory/file.js"