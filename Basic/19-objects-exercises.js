/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let student = {
    name: "leo",
    age: 53,
    poblacion: 'Palencia'
}

// 2. Accede y muestra su valor
for(let valor in student){
    console.log(`- ${valor}: ${student[valor]}`)
}


// 3. Agrega una nueva propiedad
student.email = 'leo.polanco@gmail.com'
for(let valor in student){
    console.log(`- ${valor}: ${student[valor]}`)
}
// 4. Elimina una de las 3 primeras propiedades
delete student.age

for(let valor in student){
    console.log(`- ${valor}: ${student[valor]}`)
}
// 5. Agrega una función e invócala
student.study = () => console.log("Alumno esta estudiando")

for(let valor in student){
    console.log(`- ${valor}: ${student[valor]}`)
}

student.study()

// 6. Itera las propiedades del objeto

for(let valor in student){
    console.log(`- ${valor}: ${student[valor]}`)
}

// 7. Crea un objeto anidado
let deporte = {
    nombre: 'futbol',
    horas: 6
}

student.aficion = deporte


// 8. Accede y muestra el valor de las propiedades anidadas
for(let valor in student.aficion){
    console.log(`- ${valor}: ${student.aficion[valor]}`)
}
// 9. Comprueba si los dos objetos creados son iguales

let deporte1 = {
    nombre: 'futbol',
    horas: 6
}

console.log(typeof deporte)
console.log(typeof deporte1)
console.log(deporte1 == deporte)
console.log(deporte1 === deporte)


// 10. Comprueba si dos propiedades diferentes son iguales

console.log(deporte.nombre == deporte1.nombre)