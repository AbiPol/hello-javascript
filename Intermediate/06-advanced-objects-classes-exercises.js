/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto

function vehiculo(marca,color){
    this.marca = marca
    this.color = color
}

vehiculo.prototype.getColor = function(){
    return this.color
}

let coche1 = new vehiculo('ford','rojo')
console.log(coche1.getColor())

const caminar = {
    camina(){
        console.log(`El ${this.nombre} esta caminando`)
    }
}

class vehiculo{
    constructor(nombre){
        this.nombre = nombre
    }
}

const coche = new vehiculo('coche')
Object.assign(coche,caminar)
console.log(coche.nombre)
coche.camina()

// 2. Crea un objeto que herede de otro

let vehiculo = {
    marca: "Ford",
    motor:"V8",
    color: "verde"
}

let camion = Object.create(vehiculo)
console.log(camion.marca)
console.log(camion.motor)
console.log(camion.color)

// 3. Define un método de instancia en un objeto
let vehiculo = {
    marca: "Ford",
    motor:"V8",
    color: "verde",
    camina: function(){
        console.log('vehiculo caminando')
    }
}

vehiculo.camina()
console.log(vehiculo.marca)

// 4. Haz uso de get y set en un objeto

const vehiculo1 = {
    _color : '',
    _tipo :'',

    get color(){
        return this._color
    },

    set color(value){
        this._color = value
    },
    get tipo(){
        return this._tipo
    },

    set tipo(value){
        this._tipo = value
    }

}
vehiculo1.color = 'verde' //Aqui se usan los set definidos en el objeto
vehiculo1.tipo = 'Bicicleta'

console.log(vehiculo1.color) //Aqui usamos los get definidos en el objeto.
console.log(vehiculo1.tipo)

// 5. Utiliza la operación assign en un objeto
let datosPersona = {nombre:'Leo', edad: 50, sexo: 'm'}
let programador = {lenguaje: 'JS',experiencia: '1 año'}

let curriculum = Object.assign(datosPersona,programador)

console.log(curriculum)

// 6. Crea una clase abstracta
class Vehiculo{
    constructor(tipo){
        if(new.target === Vehiculo){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.tipo = tipo
    }

    arrancar(){
        throw new Error("Este metodo debe ser implementado por la clase que hereda");
    }
}

// 7. Utiliza polimorfismo en dos clases diferentes

class Moto extends Vehiculo{
    
    arrancar(){
        console.log('La moto arranca con el pie')
    }
}

class Coche extends Vehiculo {
    arrancar(){
        console.log('El coche arranca con la llave de contacto')
    }
}

const vehiculo = new Vehiculo('vehiculo')// Erro al instanciar la clase abstracta
const car = new Coche('coche')
console.log(car.tipo)
car.arrancar()


// 8. Implementa un Mixin
class Coche {
    arrancar(){
        console.log('El coche arranca con la llave de contacto')
    }
}
const caminante = {
    andar(){
        console.log('Andando que es gerundio')
    }
}

Object.assign(Coche.prototype, caminante)
const coche2 = new Coche()
coche2.andar()


// 9. Crea un Singleton

class Session {

    constructor(name) {
        if (Session.instance) { //Accedo a la instancia de la clase
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session("LeoPol")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

const session3 = new Session("MarioPol")
console.log(session3.name)
console.log(session2 === session3)

// 10. Desarrolla un Proxy
/*
Definimos el proxy. Siempre se define asi...
*/
const proxy = {
    get(target, property) {//
        console.log(`Se accede a la target ${target}`)
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },

    set(target, property,value){
        console.log(`Se accede a la target ${target}`)
        console.log(`Se accede a la propiedad ${property}`)
        console.log(`Se accede al value ${value}`)
        if (property === "tipo" && value != 'Monocolor') {
            throw new Error("El tipo debe de ser monocolor")
        }
        target[property] = value
    }
}

/**
 * Definimos la clase a la que queremos aplicar el proxy
 */

class Ovni{
    constructor(tipo){
        this.tipo = tipo
    }
}

const vuelo = new Proxy(new Ovni('multicolor'), proxy)
console.log(vuelo.tipo)

vuelo.tipo = 'Monocolores'
console.log(vuelo.tipo)