/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for(let i=1;i<21;i++){
    console.log(`Numero ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0

for(let i=1; i<=100; i++){
    suma += i
}

console.log(`La suma total es: ${suma} `)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let numero = 1
console.log('Numeros pares')
while(numero <=50){
    if(numero % 2 == 0){
        console.log(`Numero ${numero}`)
    }
    numero++
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const myArray = [1, 2, 3, 4]

for(let valor of myArray){
    console.log(`Valor de array ${valor}`)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const myString = "¡Hola, JavaScript!"

for(let valor of myString){
    console.log(valor)
}

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const myArrayMult = [1, 2, 3, 4]
let i = 0
let producto = 1

while(i<myArrayMult.length){
    console.log(myArrayMult[i])
    producto *= myArrayMult[i]
    i++
}

console.log(`El producto es: ${producto}`)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for(let i = 0; i<=10; i++){
    console.log(`5 * ${i} = ${5*i}`)
}

// 8. Usa un bucle para invertir una cadena de texto
const myStringInv = "¡Hola, JavaScript!"

for(let i= myStringInv.length; i>=0; i--){
    console.log(myStringInv[i])
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibonacci = [0, 1]
let n = 2
while (n < 10) {
    fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
    n++
}
console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numArray = [4, 12, 9, 20, 15, 7]
let arrayBueno = []
for(let valor of numArray){
    if (valor > 10){
        arrayBueno.push(valor)
    }
}

console.log(arrayBueno)