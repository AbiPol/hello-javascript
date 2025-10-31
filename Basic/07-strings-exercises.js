/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = 'Esta es la cadena 1 de mi texto. '
let cadena2 = 'Le sigue una cadena 2 para completar informacion.'

let cadenaConc = cadena1 + cadena2
console.log (cadenaConc)

// 2. Muestra la longitud de una cadena de texto

console.log('Long cadena: ' + cadena1.length)

// 3. Muestra el primer y último carácter de un string

console.log('Primer caracter: ' + cadena1[1])
console.log('Ultimo caracter: ' + cadena1[31])

// 4. Convierte a mayúsculas y minúsculas un string

console.log('Mayusculas: ' + cadena1.toUpperCase())
console.log('Minusculas: ' + cadena1.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let texto = `Esta cadena
tiene varias lineas
y esto 
lo 
confirma`

console.log(texto)

// 6. Interpola el valor de una variable en un string
let nombre = 'Leo'
let textof = `Mi nombre es ${nombre}. Soy de aqui.`
console.log(textof)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadenaR = cadena1.replace(/ /g, "-")

console.log(cadenaR)
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena2.includes('cadenas'))
// 9. Comprueba si dos strings son iguales

let cadena3 = 'Esta es la cadena 1 de mi texto. '
console.log(cadena1 === cadena3)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(`Longitud igual? ${cadena1.length == cadena3.length}`)