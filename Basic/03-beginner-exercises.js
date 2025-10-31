/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

    //Comentario en euna linea

// 2. Escribe un comentario en varias líneas

/**
 * Comentario en 
 * varias 
 * lineas
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let cadena= "cadena 1"
let cadena2 = 'cadena 2'
let cadena3 = `cadena 3`

let number1 = 34
let number2 = 23.43

let boolean1 = true

let bigint1 = BigInt(321654987789654123321456987)
let bigint2 = 321654987789654123321456987n

let misimbolo = Symbol('misimbol')

let leo1;
let leo2 = null

// 4. Imprime por consola el valor de todas las variables
console.log(cadena) 
console.log(cadena2)
console.log(cadena3)
console.log(number1)
console.log(number2)
console.log(boolean1)
console.log(bigint1)
console.log(bigint2)
console.log(misimbolo)
console.log(leo1)
console.log(leo2)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof cadena) 
console.log(typeof cadena2)
console.log(typeof cadena3)
console.log(typeof number1)
console.log(typeof number2)
console.log(typeof boolean1)
console.log(typeof bigint1)
console.log(typeof bigint2)
console.log(typeof misimbolo)
console.log(typeof leo1)
console.log(typeof leo2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

cadena= "cadena 1 nueva"
cadena2 = 'cadena 2 nueva'
cadena3 = `cadena 3 nueva`
number1 = 96
number2 = 12.34
boolean1 = false
bigint1 = BigInt(321654987789659999999999999999)
bigint2 = 32165498778965888888888888n
misimbolo = Symbol('misimbol')
leo1='Nuevo valor de Leo1'
leo2 = 67


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

cadena= 123
cadena2 = 456
cadena3 = 789
number1 = 'Cadena que antes era numero'
number2 = "Cadena que antes era decimal"
boolean1 = 959595959595959559595959n

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const CADENA = 'cadena constante'
const NUMBER = 3.14159
const BOOLEAN = true
const NULO = null

// 9. A continuación, modifica los valores de las constantes

//CADENA = 'valor a modificar'
//NUMBER = 234
//BOOLEAN = false
//NULO = 'ya no es nulo'

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse