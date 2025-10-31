/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función

function func1(){
    return function func2(){
        console.log('estoy en funcion 2')
    }
}

const result= func1()
result()

// 2. Implementa una función currificada que multiplique 3 números

function curryMult(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

const multA = curryMult(2)
const multB = multA(3)
const multiTot = multB(4)
console.log(multiTot)

const multTotal = curryMult(2)(3)(4)
console.log(multTotal)

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function power(base, exponent) {
    if (exponent === 0) {
        return 1
    }
    return base * power(base, exponent - 1)
}

console.log(power(2, 3))
console.log(power(5, 2))


// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), 
// utilizando un closure para mantener el estado

function createCounter(numIni = 0){
    let count = numIni
    return {
        increment: function(){
            count++
            return count
        },
        decrement: function(){
            count--
            return count
        },
        getValue: function(){
            return count
        }
    }
}

const contador = createCounter(7)
console.log(contador.getValue())
contador.decrement()
contador.decrement()
console.log(contador.getValue())
contador.increment()
contador.increment()
contador.increment()
contador.increment()
console.log(contador.getValue())

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers){
    let suma = 0
    for(numero of numbers){
        suma += numero
    }
    console.log(`suma: ${suma}`)
    return multiplier * suma
}

console.log(sumManyTimes(5,6,3,7,9))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

function funcallBack(numeros,callback){
    const resultado = sum(...numeros)
    callback(resultado)
}

funcallBack([3,6,9],(resultado) =>{
    console.log(`El resultado de la suma es: ${resultado}`)
})

// 7. Desarrolla una función parcial

function multiply(a, b, c) {
    return a * b * c
}

function multiplyByFive(b, c) {
    return multiply(5, b, c)
}

console.log(multiplyByFive(2, 3))


// 8. Implementa un ejemplo que haga uso de Spread

function uneArrays(array1,array2, array3){
    return [...array1,...array2,...array3]
}

const frutas= ["manzana","platano"]
const animales = ["vaca","perro","gato"]
const coches = ["opel","renault","Peugeot","Citroen"]

const final = uneArrays(frutas,animales,coches)
console.log(final)

// 9. Implementa un retorno implícito

const multiplica = (a, b) => a * b
console.log(multiplica(2, 5))

// 10. Haz uso del this léxico

const handler = {
    name: "Brais",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();
