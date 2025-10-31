/*
Clases 13 a 22 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4355
*/

// Arrays avanzados

// - Métodos funcionales

// forEach: itera el array y accedo a cada uno de los elementos del array

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element))

// map: Crea un nuevo array pero mapilando cada uno de los elementos con una funcion.

let doubled = numbers.map(element => element * 2)
console.log(doubled)

// filter: Realiza un filtro de los elementos del array y genera un nuevo array con los elementos que cumplen con la condicion.

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce: Reduce todo a un unico valor.En result se va acumulando el resultado de ir acumulando valores,es decir
//en result va acumlando el valor current.

let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)

// - Manipulación

// flat

let nestedArray = [1, [2, [3, [4]]]] //Array anidado
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

// flatMap

let phrases = ["Hola mundo", "Adiós mundo"]
//Esto hace lo mismo que la funcion flatmap
let mapeo = phrases.map((elemet) => {
    return elemet.split(" ")
})
console.log('Mapeo: ' + mapeo)
let flayMapeo = mapeo.flat(1)
console.log(flayMapeo)
// hata aqui
let words = phrases.flatMap(phrase => phrase.split(" "))//Split transforma una cadena en un array cuyos elementos salen de esa cadena y que son divididos por el caracter
                                                        // que va en el parametro.
console.log(words)

// - Ordenación

// sort: Ordena con un criterio alfabetico. Con numeros no funciona asi.

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

//Con numeros le tenemos que indicar los numeros a comparar y la funcion al rstar los numero sabe cual es mayor y cual menor.
unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)

console.log(sorted)

// reverse: Devuelve una referencia al array y envia los elementos ordeneados al reves que estaban en el array inicial.

sorted.reverse()
console.log(sorted)

// - Búsqueda

// includes

console.log(sorted.includes(4))
console.log(sorted.includes(5))

// find

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

// findIndex

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)



// Sets avanzados: Conjuto de datos que no estan repetidos.

// - Operaciones

// Eliminación de duplicados en un array.

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]//Propagamos lo elementos del array para meterlos en el new Set. Los duplicados no entran
console.log(numbersArray)

// Unión

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union)

// Intersección: Elementos comunes en ambos set.
// Para convertir un set en un array [...setA]

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// - Conversión

// Set a Array

console.log([...setA])

// - Iteración

// forEach

setA.forEach(element => console.log(element))



// Maps avanzados

// - Iteración

let myMap = new Map([
    ["name", "MoureDev"],
    ["age", 37]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// - Conversión

// Map a Array

const arrayFromMap = Array.from(myMap)
console.log('Array sin From', arrayFromMap)
console.log('Array From', arrayFromMap.flat())

// Map a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)