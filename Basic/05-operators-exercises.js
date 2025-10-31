/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 7
let b = 15

let suma = a + b
let resta = b - a 
let mult = a * b
let div = b / a

let mod = b % a
let exp = 3 ** 3

console.log("*+ EJERCICIO 1 ***********")
console.log(suma)
console.log(resta)
console.log(mult)
console.log(div)
console.log(mod)
console.log(exp)
console.log("*******************")

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("*+ EJERCICIO 3 ***********")
console.log(b > a)
console.log( b === 15)
console.log( a > 0 && a < 15)
console.log( a < b)
console.log( b != null)
console.log("*******************")

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("*+ EJERCICIO 4 ***********")
console.log(a > b)
console.log( b !== 15)
console.log( b > 0 && b < 15)
console.log( b < a)
console.log( b == null)
console.log("*******************")

// 5. Utiliza el operador lógico and
console.log("*+ EJERCICIO 5 ***********")
console.log(b > 10 && b < 15)
console.log("*******************")

// 6. Utiliza el operador lógico or
console.log("*+ EJERCICIO 6 ***********")

console.log (a > 0 || b > 20)

console.log("*******************")

// 7. Combina ambos operadores lógicos
console.log("*+ EJERCICIO 7 ***********")
console.log(((5 > 3) && (b < a)) || (a > b))
console.log("*******************")

// 8. Añade alguna negación
console.log("*+ EJERCICIO 8 ***********")
console.log( a!== 8)
console.log("*******************")

// 9. Utiliza el operador ternario
console.log("*+ EJERCICIO 9 ***********")
let year = 2026
console.log((year == 2025) ? "Estamos en la actualidad" : "Este año no es el mismo")
console.log("*******************")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("*+ EJERCICIO 10 ***********")
let year1 = 2031
console.log((year1 > 2020 && year1 < 2030) ? "Año correcto" : "Año fuera de rango")
console.log("*******************")