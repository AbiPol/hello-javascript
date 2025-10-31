/*
Clases 29 a 37 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=9096
*/

// Clases avanzadas

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Brais", 37)
person.greet()

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()

// - Abstracción

class Animal {
    constructor(name) {
        if (new.target === Animal) { //Si la instancia que estoy creando es de tipo Animal se lanza error. Es la forma de definir una clase abstracta en JS
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound() {
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

// Error
// const animal = new Animal("Mou")
// console.log(animal)

// - Polimorfismo: capacidad de una clase derivada por la que cada clase define como realiza una misma funcionalidad heredada

class Cat extends Animal {

    makeSound() {
        console.log("Miau!")
    }
}

class Dog extends Animal {

    makeSound() {
        console.log("Guau!")
    }
}

const cat = new Cat("MoureCat")
console.log(cat)
cat.makeSound()

const dog = new Dog("MoureDog")
console.log(dog)
dog.makeSound()

// - Mixins: Es una manera de compartir funcionalidades sin tener que practicar la herencia.

//Declaro el objeto Mixing
const FlyMixin = {
    fly() {
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal { }

class Dragon extends Animal { }


Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("MoureBird")

console.log(bird.name)
bird.fly()

const dragon = new Dragon("MoureDragon")

console.log(dragon.name)
dragon.fly()

// - Patrón Singleton: Los patrones de diseño son convenciones que se deben de seguir para resolver problemas.
//Con este parton de diseño nos aseguramos que una clase solo se puede instanciar una vez
class Session {

    constructor(name) {
        if (Session.instance) { //Accedo a la instancia de la clase
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session("Brais Moure")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

const session3 = new Session("MoureDev")
console.log(session3.name)
console.log(session2 === session3)

// - Symbol: tipo de dato primitivo, que representa un tipo de dato unico e inmutable

const ID = Symbol("id")

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }

    getId() {
        return this[ID]
    }
}

const user = new User("Brais")
console.log(user.name)
console.log(user.ID)
console.log(user[ID])
console.log(user.getId())

// - instanceof

class Car { }

const car = new Car()
console.log(car)

console.log(car instanceof Car)

// - create

const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car)
console.log(anotherCar)

// - Proxy: Sirve para interceptar y personalizar el comportamiento de las clases. Es un proceso que esta en medio para ontrolar ciertas funcionalidades

const proxy = {
    get(target, property) {//
        console.log(`Se accede a la target ${target}`)
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        console.log(`Se accede a la target ${target}`)
        console.log(`Se accede a la propiedad ${property}`)
        console.log(`Se accede al value ${value}`)
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)

// Error
 account.balance = -10