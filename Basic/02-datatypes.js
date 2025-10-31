/*
Clase 17 - Tipos de datos
Vídeo: https://youtu.be/1glVfFxj8a4?t=3599
*/

// Tipos de datos primitivos: Son los datos en los que se fundamenta la interaccion con el lenguaje. Representan un solo tipo de datos. Son los datos basicos de cada lenguaje.
// No tienen ni funciones ni metodos.

// Cadenas de texto (string)
let myName = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false
console.log(isTeacher)

// Undefined: Variable declarada pero no tiene valor asociado, no esta inicializada.
let undefinedValue
console.log(undefinedValue)

// Null: la variable tiene valor nulo. Es un valor intencionado desde la programacion.
let nullValue = null

// Symbol: Es un tipo de dato primitivo que crea identificadores unicos

let mySymbol = Symbol("mysymbol")

// BigInt: Son numeros enteros muy grandes que estan fuera del rango de number.

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)