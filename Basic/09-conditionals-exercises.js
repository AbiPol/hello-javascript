/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = 'Leo'
let pass = 'leo1'

if(user == 'Leo' && pass == 'leo'){
    console.log('User/pass correctos')
} else {
    console.log('User/pass incorrectos')
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -4
if(numero < 0){
    console.log('Numero negativo')
} else if(numero > 0){
    console.log('Numero positivo')
} else {
    console.log('Numero igual a cero')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let anios = 15

if(anios >= 18){
    console.log('Puedes votar')
} else{
    console.log(`Te faltan ${18 - anios} años para poder votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad = 18
let adulto = (edad >=18) ? 'Es adulto' : 'Es menor de edad'
console.log(adulto)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 10

if (mes >=1 && mes <= 3 ){
    console.log('Estamos en invierno')
} else if (mes >=4 && mes <=6 ){
    console.log('Estamos en primavera')
} else if (mes >=7 && mes <= 9){
    console.log('Estamos en verano')
}else{
    console.log('Estamos en otoño')
}
    

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes === 2) {
    console.log("28 o 29 días")
} else if ([4, 6, 9, 11].includes(mes)) {
    console.log("30 días")
} else {
    console.log("31 días")
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 'en'

switch(idioma){
    case 'es': 
        console.log('Hola')
        break
    case 'en':
        console.log('Hello')
        break
    case 'fr':
        console.log('Bonjour')
        break
    default:
        console.log('No conocer ese idioma')
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes1 = 1

switch(mes1){
    case 1:
    case 2:
    case 3:
        console.log('Estamos en invierno')
        break
    case 4:
    case 5:
    case 6:
        console.log('Estamos en primavera')
        break
    case 7:
    case 8:
    case 9:
        console.log('Estamos en verano')
        break
    case 10:
    case 11:
    case 12:
        console.log('Estamos en otoño')
        break
    default:
        console.log('Mes incorrecto')
}


// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch(mes1){
    case 2:
        console.log("28 o 29 días")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 días")
        break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 días")
        break
    default:
        console.log('Mes incorrecto')
}
