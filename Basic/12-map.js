/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map: Es una estructura de datos que permite almacenar pares clave-valor. No se pueden duplicar las claves.

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set: PAra agregar o actualizar pares clave-valor en un Map

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get: se accede al elemento con clave que se le indica en el parametro.

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has: verifica si existe una clave en la estructura map

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete:Borrado de un par clave-valor

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())//Retorna un listado de las claves que tenemos en la estructura
console.log(myMap.values())//retorna los values
console.log(myMap.entries())//Nos devuelve todas las claves-valor de la estructura.

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)



