/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try {
    //myObject.email
} catch (error) {
    console.log(error)
}

// 2. Captura una excepción utilizando try-catch y finally

/*try {
    myObject.email
} catch (error) {
    console.log(error.message)
}finally{
    console.log('Esto se esta ejecutano siempre')
}*/

// 3. Lanza una excepción genérica
//throw new error('Error generico que se ha lanzado')


// 4. Crea una excepción personalizada
class personalityException1 extends Error{
    constructor(message){
        super(message)
    }
}

// 5. Lanza una excepción personalizada
function total(){
    throw new personalityException('Esto es un error personalizado')
}

class personalityException extends Error{
    constructor(message){
        super(message)
    }
}
try{
    //console.log(total())
}catch(error){
    console.log(error.message)
}


// 6. Lanza varias excepciones según una lógica definida
function copia(cad1,cad2){
    if(cad1 == ' '){
        console.log('entro cadena1')
        throw new Error('Falta cadena 1 ')
    }
    if(cad2 == ' '){
        console.log('entro cadena2')
        throw new Error('Falta cadena 2 ')
    }
    if(typeof cad1 !== 'string' || typeof cad2 !== 'string'){
        throw new ReferenceError('Lo datos deben de ser cadenas')
    }
    return cad1 + cad2
}
// 7. Captura varias excepciones en un mismo try-catch
try{
    console.log(copia('5',' cadena 2'))
}catch(error){
    if(error instanceof TypeError){
        console.log('Se ha producido un error de tipo', error.message)
    } else if(error instanceof ReferenceError){
        console.log('Se ha producido un error de referencia: ', error.message)
    } else if(error instanceof Error){
        console.log('Se ha producido un error general', error.message)
    }

}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let valores = [56,763,'error',7654,'cadena']

for(let i = 0; i< valores.length; i++){
    try {
        let floatValor = parseFloat(valores[i])
        if(isNaN(floatValor)){
            throw new Error(`${valores[i]} no es un valor valido`)
        }
        console.log('Valor transformado: ', floatValor)
    } catch (error) {
        console.log(`Error que nos da: ${error.message}`)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function checkProperty(obj, property) {
    if (!obj.hasOwnProperty(property)) {
        throw new CustomError(`La propiedad "${property}" no se ha encontrado en el objeto`)
    }
    return obj[property]
}

try {
    let person = { name: "Brais", age: 37 }
    console.log(checkProperty(person, "name"))
    console.log(checkProperty(person, "address"))
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function unstableOperation() {
    if (Math.random() > 0.9) { // Genera un número aleatorio entre 0 y 1 (Si no conoces "Math", el curso tiene una lección sobre módulos)
        console.log("Operación correcta")
    } else {
        throw new Error("Error inesperado")
    }
}

function retryOperation() {
    const maxRetries = 10
    let attempts = 0
    let success = false

    while (attempts < maxRetries && !success) {
        try {
            unstableOperation()
            success = true
        } catch (error) {
            attempts++
            console.log(`Intento ${attempts} fallido: ${error.message}`)
        }
    }

    if (!success) {
        console.log("Se ha alcanzado el máximo número de intentos. Operación fallida.")
    }
}

retryOperation(10)