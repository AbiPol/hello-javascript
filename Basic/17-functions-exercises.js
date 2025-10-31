/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a,b){
    return a + b
}

const resultado = suma(3,4)
console.log(`La suma es ${resultado}`)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const numeros = [3,6,4,8,9]

function mayorNumero(nums){
    let max = nums[0]
    for(let i = 0; i<nums.length; i++){
        if(nums[i] > max){
            max = nums[i]
        }
    }
    return max
}

console.log(`El numero mayor es: ${mayorNumero(numeros)}`)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function letras(cadena){
    const vocales = "aeiou"
    let count = 0
    let cadenaFinal = cadena.toLowerCase()
    for (let letra of cadenaFinal){
        if(vocales.includes(letra)){
            count++
        }
    }
    return count
}

console.log(letras("Esto es el abecedario y contamos vocales"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const cadenas = ['String 1','string2','string de cadena','cadena con string','mas madera por aqui']
function arrayString(array){
    let arrayUpper = []
    for (let cadena of array){
        arrayUpper.push(cadena.toUpperCase())
    }
    return arrayUpper
}

let resultado1 = arrayString(cadenas)
console.log(resultado1)


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function comparoArrys(array1, array2){
    let arrayResult = []
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if (array1[i] === array2[j]){
                arrayResult.push(array1[i])
            }
        }
    }
}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function arraySuma(numeros){
    let sumaPares = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            sumapares += numeros[i]
        }
    }
    return sumaPares
}

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function cuadrado(numeros){
    let cuadradoArray = []
    for(let i = 0; i < numeros.length; i++){
        cuadradoArray[i] = numeros[i] ** 2
    }

    return cuadradoArray
}

console.log(cuadrado([2,3,4,5]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function inversa(cadena){
    let cadenaInversa = []
    let words = cadena.split(" ")//Funcion que divide una cadena en un array, separando por el caracter que se indica en el param

    for(let i = words.length -1; i >= 0; i--){
        cadenaInversa.push(words[i])
    }

    return cadenaInversa.join(" ")//Traforma un array en una cadena y separndo cada elemento con el caracter que se indica en param
}

console.log(inversa("Hola, estoy aqui"))


// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero){
    let result = 1
    if( numero == 0 || numero == 1) result = 1
    for( let i = 1; i<= numero; i++){
        result *= i
    }
    return result
}

console.log(`Fatorial: ${factorial(2)}`)