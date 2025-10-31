/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

function tratoError(){
    try {
        console.log(myObject.dormir)
    } catch (error) {
        console.error('Fallo: ', error.message)
    }
}

tratoError()

// 2. Crea una función que utilice warn correctamente
function tratoWarn(){
    let numeros = [0,1,2,3]
    let suma = 0
    try {
        for(let numero of numeros){
            suma += numero
        }
        if (suma > 2){
            console.warn('Es un numero alto')
        }
        return suma
    } catch (error) {
        console.error('Fallo: ', error.message)
    }
}

tratoWarn()


// 3. Crea una función que utilice info correctamente

function tratoInfo(){
    let numeros = [150,265,2,854]
    let suma = 0
    try {
        for(let numero of numeros){
            console.info('Informando de que he pasado por aqui')
            suma += numero
        }
        if (suma > 1050){
            console.warn('Es un numero alto')
        }
        return suma
    } catch (error) {
        console.error('Fallo: ', error.message)
    }
}

tratoInfo()


// 4. Utiliza table

let datos=[
    {nombre: 'leo',sexo: 'masc', edad: 23},
    {nombre: 'leo',sexo: 'masc', edad: 23},
    {nombre: 'leo',sexo: 'masc', edad: 23},
    {nombre: 'leo',sexo: 'masc', edad: 23},
]

console.table(datos)

// 5. Utiliza group

console.group('User')
console.log("Nombre: Leo")
console.log("Edad: 34")
console.groupEnd('User')

console.log('Siguiente mensaje')

// 6. Utiliza time

console.time('ejec1')
for(let i = 0; i<= 20000; i++){

}
console.timeEnd('ejec1')


// 7. Valida con assert si un número es positivo

let numero = 34
console.assert(numero > 0, 'El numero debe de ser positivo')

// 8. Utiliza count

console.count('hola')
console.count('hola')
console.count('holass')
console.count('holas')
console.countReset('hola')
console.count('hola')
console.count('holas')
console.count('holass')

// 9. Utiliza trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

// 10. Utiliza clear

//console.clear()