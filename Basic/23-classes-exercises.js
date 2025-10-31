/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Animal{
    constructor(nombreComun,clasificacion,habitat) {
        this.nombreComun = nombreComun
        this.clasificacion = clasificacion
        this.habitat = habitat
    }


// 2. Añade un método a la clase que utilice las propiedades
    static alimenta(){
        console.log('El animal se alimenta')
    }

    movimiento(){
        console.log('el animal se mueve')
    }
}


// 3. Muestra los valores de las propiedades e invoca a la función
let animal2 = new Animal('perro','can','el mundo')
console.log(animal2.nombreComun)
console.log(animal2.clasificacion)
console.log(animal2.habitat)
animal2.movimiento()

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático
Animal.alimenta()
// 6. Crea una clase que haga uso de herencia
class Gato extends Animal{
    constructor(nombreComun,clasificacion,habitat,velocidad){
        super(nombreComun,clasificacion,habitat)
        this.velocidad = velocidad
    }

    movimiento(){
        console.log('El gato caminando')
    }
}

// 7. Crea una clase que haga uso de getters y setters
class User{

    #pass
    constructor(name, pass){
        this.name = name
        this.#pass = pass
    }

    get pass(){
        return this.#pass
    }

    set newPass(newPass){
        this.#pass = newPass
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

let user1 = new User('leo','1234')
console.log(user1.name)
console.log(user1.pass)

user1.newPass = 5678
console.log(user1.pass)
// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 
let gato1 = new Gato('gato','gatunos','la casa',90)
console.log(gato1)
Animal.alimenta()
gato1.movimiento()