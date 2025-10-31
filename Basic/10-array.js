/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

/**
 * Una estructura de datos
 */

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push: Añade elementos a un array y en el orden que se lo decimos.
// pop: Elimina el ultimo elemento del array y lo devuelve

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(`Array despues de pop() ${myArray}`)

// shift: Elimina el primer elemento de array y lo devuelve
// unshift: Agrega uno o mas elementos al inicio del array

console.log(myArray.shift())
console.log(`Shift: ${myArray}`)

myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length

console.log(myArray.length)

// clear: para borrar elementos. Para borrar array se debe de volver a inicializar

myArray = []
myArray.length = 0 // alternativa
console.log(`Ejecutando clear: ${myArray}`)

// slice: genera otro array pero con el trocito de informacion que nosotros queramos.
myArray = ["Brais", "Moure", "mouredev", 37, true]

// En este caso coge desde el elemento 1(segundo del array) hasta el elemento 3(no incluido). 
// Es decir, coge elemento 1 y 2 y genera un nuevo array con esos valores.
let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice: Elimina los elementos que le indicamos.
// En este caso eliminamos los elementos en ese rango del 1 al 3. Es decir elminamos los indices 1,2 y 3
myArray.splice(1, 3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]
//Aqui elimina los elementos 1 y 2 y en esa posicion introduce el nuevo dato que va en el parametro 3..
myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)

console.log('javascript'.slice(0,4))