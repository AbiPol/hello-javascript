/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set: Estructura de datos que permite almacenar valores unicos. No adite duplicados, a diferencia de los arrays.

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización. Se debe de inicializar con [] dentro de los ()

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://moure.dev")

console.log(mySet)

mySet.delete("https://moure.dev")

console.log(mySet)

console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))

console.log(mySet)

// has: Nos dice si el elemento existe o no en el set

console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size: Tamaño del Set

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)