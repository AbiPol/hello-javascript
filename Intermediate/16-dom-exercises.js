/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
const contenedor = document.getElementById('mainContainer')
document.addEventListener('DOMContentLoaded',() => {
    //const contenedor = document.getElementById('mainContainer')
    const textH1 = document.createElement('h1')
    textH1.textContent = "!Hola Mundo!"
    textH1.id = 'title'
    contenedor.appendChild(textH1)



// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

    const newImg = document.createElement("img")
    newImg.id = "myImage"
    newImg.src = "https://picsum.photos/150"
    newImg.style.width = "350px"
    newImg.style.height = "350px"
    contenedor.appendChild(newImg)


// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
    const divBox = document.createElement('div')
    divBox.id = 'box'
    divBox.classList.add("resaltado")
    contenedor.appendChild(divBox)


// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
    const parrafo = document.createElement('p')
    parrafo.id = 'paragraph'
    parrafo.textContent = 'Parrafo que añado en este div'
    parrafo.style.color = 'blue'
    divBox.appendChild(parrafo)

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
    const divBox3 = document.createElement('div')
    divBox3.id = 'box3'
    divBox3.classList.add("resaltado")
    contenedor.appendChild(divBox3)

    function addLista(){
        console.log('funcion lista')
        const lista = document.createElement('ul')
        lista.id = 'list'
        const item = document.createElement('li')
        item.textContent = 'Nuevo elemento'
        lista.appendChild(item)
        divBox3.appendChild(lista)
    }
    const button = document.createElement('button')
    button.textContent = 'Añadir'
    divBox3.appendChild(button)
    button.addEventListener("click", addLista)

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
    const divBox2 = document.createElement('div')
    divBox2.id = 'box2'
    divBox2.classList.add("resaltado")
    contenedor.appendChild(divBox2)

    const delParrafo = document.createElement('p')
    delParrafo.id = 'deleteParagraph'
    delParrafo.textContent = 'Este es un aparrafo que vamos a borrar en cuanto pulse el boton de aqui al lado'
    divBox2.appendChild(delParrafo)

    const button2 = document.createElement('button')
    button2.textContent = 'Borrar'
    divBox2.appendChild(button2)

    button2.addEventListener("click",() => {
        delParrafo.remove()
    })
// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
    const divBox4 = document.createElement('div')
    divBox4.id = 'content'
    divBox4.classList.add("resaltado")
    contenedor.appendChild(divBox4)

    const parrafo2 = document.createElement('p')
    parrafo2.id = 'parrafo2'
    parrafo2.textContent = 'Parrafo prefijado para despues cambiarlo'
    divBox4.appendChild(parrafo2)
    
    //const parf = document.getElementById('parrafo2')
    const nuevoEle = document.createElement('h2')
    nuevoEle.textContent = 'Nuevo contenido'

    parrafo2.replaceWith(nuevoEle)

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
    const divBox5 = document.createElement('div')
    divBox5.id = 'box5'
    divBox5.classList.add("resaltado")
    contenedor.appendChild(divBox5)

    const button3 = document.createElement('button')
    button3.textContent = 'Saludamos'

    divBox5.appendChild(button3)

    button3.addEventListener("click", () => {
        alert('!Hola!')
    })

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
    const divBox6 = document.createElement('div')
    divBox6.id = 'box6'
    divBox6.classList.add("resaltado")
    contenedor.appendChild(divBox6)

    const input = document.createElement('input')
    input.id = 'textInput'
    input.placeholder = 'Ingresa texto'
    divBox6.appendChild(input)

    const div1 = document.createElement('div')
    div1.id = 'result'
    div1.style.backgroundColor = 'lightgreen'
    divBox6.appendChild(div1)

    const parrafoDiv = document.createElement('p')
    parrafoDiv.id = 'parfdiv'
    parrafoDiv.style.color = 'white'
    div1.appendChild(parrafoDiv)

    divBox6.addEventListener("keyup", () => {
        parrafoDiv.textContent = input.value
    })
    

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

    const divBox7 = document.createElement('div')
    divBox7.id = 'box7'
    divBox7.classList.add("resaltado")
    contenedor.appendChild(divBox7)

    const button4 = document.createElement('button')
    button4.textContent = 'Cambio de color'

    divBox7.appendChild(button4)

    button4.addEventListener("click", () => {
        //document.body.style.backgroundColor = 'blue'
        contenedor.style.backgroundColor = 'lightblue'
    })
})