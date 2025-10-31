/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array = ['elemento1','elemento2','elemento3',45,true]

let [ele1,ele2] = array 
console.log(ele1)
console.log(ele2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let[elem1,elem2 ,elem3 ,elem4 ,elem5=false ,elem6='correo@gmail.com'] = array
console.log(elem5)
console.log(elem6)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    nombre: 'Leo',
    age: 53
}

let{nombre, age} = person
console.log(nombre)
console.log(age)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let{nombre: nombre1, age: age1} = person
console.log(nombre1)
console.log(age1)


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let studient = {
    nombre:'manuel',
    age: '19',
    aficion: {
        nombre: 'futbol',
        dias: 6
    }
}

let{aficion:{nombre:nombre2,dias}}= studient

console.log(nombre2)
console.log(dias)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let nombres=['Manuel', 'jaime','Maria']
let nombres2=['Manuela', 'Lucia','mario']

let nombres3 = [...nombres, ...nombres2]
console.log(nombres3)

// 7. Usa propagación para crear una copia de un array
let numeros = [1,2,3,4,5]

let numeros2 = [...numeros]
console.log(numeros)
console.log(numeros2)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let animal = {
    nom: 'laila',
    raza:'perro'
}

let vegetal = {
    nombre:'zanahoria',
    color:'naranja'
}

let cosas = {...animal,...vegetal}
console.log(cosas)

// 9. Usa propagación para crear una copia de un objeto
let animal1 = {
    nom: 'laila',
    raza:'perro'
}

let animal2= {...animal1}
console.log(animal1)
console.log(animal2)

// 10. Combina desestructuración y propagación

let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9]
let array3 = [10,11,12,13,14]

let[elemt1,elemt2] = array1

let array4 = [...array3,elemt1,elemt2]

console.log(...array4)