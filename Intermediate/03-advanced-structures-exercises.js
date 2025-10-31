/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const numeros = [2,3,4,5,6,7,8]

let numberMap = numeros.map(num => num * 3)
console.log(numberMap)

let numberFilt = numberMap.filter(num => num % 2 === 0)
console.log(numberFilt)

let numberRed = numberFilt.reduce((result,current) => (result + current))
console.log(numberRed)


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let numberCubo = numeros.map(num => num ** 3).filter(num => num % 2 === 0)
console.log(numberCubo)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
const mapeo = numeros.map(num => {
    if(num % 2){
        return [num * 2,num / 2]
    }
    return num * 2
})
console.log(mapeo)

const resultado = mapeo.flat()
console.log(resultado)

const resFlatMap = numeros.flatMap(num => {
    if(num % 2){
        return [num * 2,num / 2]
    }
    return num * 2
})
console.log(resFlatMap)


// 4. Ordena un array de números de mayor a menor
const numSort = [4,6,1,5,9,3,7,2,8]

const resulSort = numSort.sort((a,b) => a - b)
console.log(resulSort)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const setA = new Set([2,4,5,8,9])
const setB = new Set([1,4,5,7])

const union = new Set([...setA, ...setB])
console.log(union)

const interseccion = new Set([...setA].filter(num => setB.has(num)))
console.log(interseccion)

const diferencia = new Set([...setA].filter(num => !setB.has(num)))
console.log(diferencia)

// 6. Itera los resultados del ejercicio anterior
const array = [...union]
const setUnion = new Set(array.sort((a ,b) => a - b))
setUnion.forEach(num => {
    console.log('- ', num)
})
// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

const users = new Map([
    [1, { name: "Brais", age: 25, email: "brais@ejemplo.com" }],
    [2, { name: "Moure", age: 17, email: "moure@ejemplo.com" }],
    [3, { name: "MoureDev", age: 38, email: "mouredev@ejemplo.com" }],
    [4, { name: "Brais Jr.", age: 16, email: "braisjr@ejemplo.com" }]
])

users.forEach((value,key) => console.log(`${key}- Nombre:${value.name} | Edad: ${value.age} | Email: ${value.email}` ))

// 8. Dado el mapa anterior, crea un array con los nombres
const usersArray = Array.from(users)
console.log(usersArray)
// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
let arrayUsers = []
users.forEach(user => {
    if (user.age >= 18){
        arrayUsers.push(user.email)
    }
})

console.log(arrayUsers)


// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

//Transformo mapa en objeto
const objectUsers = Object.fromEntries(users)
console.log(objectUsers)

const mapUsers = new Map()

Object.values(objectUsers).forEach((user => {
    mapUsers.set(user.email,user)
}))

/*
users.forEach(ele => {
    mapUsers.set(ele.email, ele)
})*/

console.log(mapUsers)
