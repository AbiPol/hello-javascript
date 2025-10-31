/*
Clases 24 a 28 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7639
*/

// Objetos avanzados

// - Prototipos y Herencia

// Prototipos: es un mecanismo por el que un objeto puede heredar propiedades y metodos de otros objetos.

let person = {
    name: "Brais",
    age: 37,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)//Este es un enlace interno que apunta a person.prototype
console.log(Object.getPrototypeOf(person))

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()

let person2 = Object.create(person)

// Herencia

let programmer = Object.create(person)
programmer.language = "JavaScript"

programmer.name = "Leo Polanco"
console.log(person.name)
console.log(person.language)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
programmer.greet()
programmer.sayAge()

// - Métodos estáticos y de instancia

function Person(name, age) {
    this.name = name
    this.age = age
}

//Creamos una funcion statica, es decir que es una funcion de clase y no de instancia.
Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("Brais", 37)
newPerson.greet()
programmer.greet()

// - Métodos avanzados

// assign: Combina varios objetos para, al final, constuir uno solo

let personCore = { name: "Brais" }
let personDetails = { age: 37, alias: "MoureDev" }

let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))