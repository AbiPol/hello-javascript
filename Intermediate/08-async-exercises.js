/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function saludo(nombre,callback){
    setTimeout(() => {
        callback(nombre)
    },2000)
}

saludo('Leo',(name) =>{
    console.log(`Hola, ${name}`)
})

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback){
    setTimeout(() => {
        console.log('Paso 1 completado')
        callback()
    },1000)
}

function task2(callback){
    setTimeout(() => {
        console.log('Paso 2 completado')
        callback()
    },1000)
}

function task3(callback){
    setTimeout(() => {
        console.log('Paso 3 completado')
        callback()
    },1000)
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log('Todos los pasos completados')
        })
    })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

const promesa = function parImpar(numero){
    return new Promise((resolve,reject)=>{
        if(numero % 2 == 0){
            resolve('Numero par')
        } else {
            reject('Numero Impar')
        }
    })
}
promesa(4).then(result => console.log(result))
          .catch (error => console.log(error))

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask(){
    return new Promise(resolve => {
        setTimeout( ()=>{
            console.log('Primera tarea completada')
            resolve()
        }
    ,1000)
    })
}

function secondTask(){
    return new Promise(resolve => {
        setTimeout( ()=>{
            console.log('Segunda tarea completada')
            resolve()
        }
    ,2000)
    })
}

function thirdTask(){
    return new Promise(resolve => {
        setTimeout( ()=>{
            console.log('Tercera tarea completada')
            resolve()
        }
    ,1500)
    })
}

firstTask()
        .then(secondTask)
        .then(thirdTask)
        .then(() => console.log('Todas las tareas finalizadas'))

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

function wait(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function executeTasks(){
    console.log('Inicio Tarea')
    await wait(1000)
    console.log('Primera tarea completada')
    await wait(2000)
    console.log('Segunda tarea completada')
    await wait(1500)
    console.log('Tercera tarea completada')
    console.log('Fin Tarea')
}

executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id < 5){
                resolve({id, name: `Usuario ${id}`})
            } else {
                reject('Usuario no encontrado')
            }
        },2000)
    })
}

async function comprobarUser(id){
    try {
        const user = await getUser(id)
        console.log('Usuario encontrado: ', user)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

//comprobarUser(3)
//comprobarUser(5)
comprobarUser(7)


// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
    console.log("Inicio")
    setTimeout(() => console.log("setTimeout ejecutado"), 0)
    Promise.resolve().then(() => console.log("Promesa resuelta"))
    console.log("Fin")


// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

function firstTask(){
    return new Promise(resolve => {
        setTimeout( ()=>{
            console.log('Primera tarea completada')
            resolve('Primera tarea completada')
        }
    ,1000)
    })
}

function secondTask(){
    return new Promise(resolve => {
        setTimeout( ()=>{
            console.log('Segunda tarea completada')
            resolve('Segunda tarea completada')
        }
    ,2000)
    })
}

function thirdTask(){
    return new Promise(resolve => {
        setTimeout( ()=>{
            console.log('Tercera tarea completada')
            resolve('Tercera tarea completada')
        }
    ,1500)
    })
}

Promise.all([firstTask(),secondTask(),thirdTask()])
.then((result) => {
    console.log(result)
})
.catch(error => {
    console.error(error)
})

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(seg){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },seg * 1000)
    })
}

async function countDown(){
    console.log('Iniciando espera de 3 segundos...')
    await waitSeconds(3)
    console.log('Tiempor finalizado')
} 

countDown()


// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
let saldoCliente = 500

function checkBalance(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(saldoCliente)
        },1000)
    })
}

function withdrawMoney(amount){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(saldoCliente > amount){
                saldoCliente -= amount
                resolve(saldoCliente)
            } else{
                reject('No hay fondos suficientes')
            }
        }, 2000)
    })
}

async function sacarDinero(){
    try{
        const saldoInicial = await checkBalance()
        console.log("Saldo disponible: ", saldoInicial)
        console.log('Retirando 300$...')
        const primerSaldo = await withdrawMoney(300)
        console.log(`Operación realizada con éxito, saldo restante: ${primerSaldo}$`)
        console.log('Retirando 100$...')
        const segundoSaldo = await withdrawMoney(100)
        console.log(`Operación realizada con éxito, saldo restante: ${segundoSaldo}$`)
        console.log('Retirando 300$...')
        const tercerSaldo = await withdrawMoney(300)
        console.log(`Operación realizada con éxito, saldo restante: ${tercerSaldo}$`)

    } catch(error){
        console.log(`Error: ${error}`)
    }
}

sacarDinero()