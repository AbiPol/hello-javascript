/*
Clase 44 - Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=21480
*/

// Exportación de módulos

// Funciones

export function add(a, b) {
    return a + b
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.1416
export let name = "MoureDev"

// Clases

export class Circle {

    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }

}

// Exportación por defecto: Las que se definen con default significa que la hacer el import en otro modulo
// no hay que hacer referencia a la funcion o vble. en concreto, sino que al importar el modulo, este elemento default va por defecto.
// Con default no se pueden exportar constantes ni vbles.

export default function substract(a, b) {
    return a - b
}

// export default class MyClass {

//     func() {
//         console.log("Mi clase")
//     }
// }
