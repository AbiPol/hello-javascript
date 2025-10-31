/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let arrayAnimales = ['gato','perro','serpiente','elefante','raton']

// 2. Añade dos más. Uno al principio y otro al final

arrayAnimales.unshift('gallina')
arrayAnimales.push('lagarto')

console.log(arrayAnimales)

// 3. Elimina el que se encuentra en tercera posición
arrayAnimales.splice(2,1)
console.log(arrayAnimales)


// 4. Crea un set que almacene cinco libros

let setLibros = new Set(["Capitan Alatriste","la vida en verde","Cocina moderna","Programacion POO","otores en detalle"])

// 5. Añade dos más. Uno de ellos repetido

setLibros.add("La sirvienta")
setLibros.add("Java de hoy",)
console.log(setLibros)

// 6. Elimina uno concreto a tu elección
setLibros.delete("Cocina moderna")

console.log(setLibros)
// 7. Crea un mapa que asocie el número del mes a su nombre
let mesesMap = new Map([
    ['1','Enero'],
    ['2','Febrero'],
    ['3','marzo'],
    ['4','Abril'],
    ['5','Mayo'],
    ['6','Junio'],
    ['7','Julio'],
    ['8','Agosto'],
    ['9','Septiembre'],
    ['10','Octubre'],
    ['11','Noviembre'],
    ['12','Diciembre']
])

console.log(mesesMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mesesMap.has('5'))
console.log(mesesMap.get('5'))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let verano = ['Junio','Julio','Agosto']

mesesMap.set('verano',verano)
console.log(mesesMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let invierno=['Diciembre','Enero','Febrero']
let setInvierno = new Set(invierno)
mesesMap.set('invierno',setInvierno)

console.log(mesesMap)