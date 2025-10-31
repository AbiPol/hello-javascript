/*
Clases 39 a 44 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11890
*/

// Programación asíncrona

// Código síncrono

console.log("Inicio")

for (let i = 0; i < 90000000000; i++) { }

console.log("Fin")

// Event Loop (Bucle de eventos)

// Componentes del Event Loop:
// 1. Call Stack (Pila de ejecución)
// 2. Web APIs (APIs del navegador) o Node.js:
// 3. Task Queue (setTimeout()) y Microtask Queue (Promesas)

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queue o Microtask Queue
// 4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// Código asíncrono

// - Callbacks: Los callback son funciones que se pasan por argumento para ejecutarse despues. 
// La callback es la que nos dice a la funcion llamante que ya termino su ejecucion y que continue. Puede enviar datos

console.log("Inicio")

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos")
}, 2000)

console.log("Fin")

// - Problema: Callback Hell: funcion que recibe una funcion como parametro. Esa funcion se ejecuta dentro de la funcion padre y se ejecuta cuando la funcin ha finalizado

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado")
        callback() //Notifica que se ha acabado
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
})

// - Promesas: Es un objeto que representa el resultado eventual (éxito o error) de una operación asíncrona.
// Una promesa actúa como un “compromiso” de que se obtendrá un valor más adelante, cuando la operación termine.

const promise = new Promise((resolve, reject) => {
    // IMPORTANTE: Inicialmente escribí setInterval, pero lo correcto es setTimeout
    // setInterval se ejecutaría indefinidamente cada 4s, y el proceso nunca finalizaría
    setTimeout(() => {
        const ok = true
        if (ok) {
            resolve("Operación exitosa")
        } else {
            reject("Se ha producido un error")
        }
    }, 4000)
})

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() =>{
        console.log("se finalizo toda la operacion")
    })

// - Encadenamiento de promesas

function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3 con promesa completado")
            resolve()
        }, 1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log("Todos los pasos con promesa completados")
    })

// - Async/Await

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process() {

    console.log("Inicio del proceso")

    await wait(5000)
    console.log("Proceso después de 5 segundos")

    await wait(1000)
    console.log("Proceso después de 1 segundo")

    await wait(2000)
    console.log("Proceso después de 2 segundos")

    console.log("Fin del proceso")
}

process()