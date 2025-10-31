/*
Clases 61 a 68 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18822
*/

// Manejo del DOM (Document Object Model)

console.log(document)

// - Selección de elementos

// Métodos básicos (selector HTML)

const myElementById = document.getElementById("id")

const myElementsByClass = document.getElementsByClassName("class")

const myElementsByTag = document.getElementsByTagName("tag")// Etiqueta HTML, <p>,<H1>,<MAIN>,....

// Métodos más modernos (selector CSS)
/**
 *  Selector de Tipo (Etiqueta)	p, div, a: Selecciona todos los elementos de un tipo de etiqueta específico.
    Selector de Clase .clase-roja:	Selecciona el elemento que tiene un atributo class con el valor especificado. Es el más común para buscar elementos.
    Selector de ID	#menu-principal: 	Selecciona el elemento con el id especificado. Solo selecciona un único elemento, ya que los IDs deben ser únicos.
 */
document.querySelector(".paragraph")//Obtiene el primer elemento que encuentra
document.querySelectorAll(".paragraph") //Obtienen todos los elementos

// - Manipulación de elementos

const title = document.getElementById("title")
title.textContent = "Hola JavaScript"

const container = document.querySelector(".container")
container.innerHTML = "<p>Esto es un nuevo párrafo</p>"

// - Modificación de atributos

// Obtención del atributo
const link = document.querySelector("a")
const url = link.getAttribute("href")

// Establecimiento del atributo
link.setAttribute("href", "https://example.com")

// Comprobación de atributo
const hasTarget = link.hasAttribute("target")

// Eliminación de atributos
link.removeAttribute("target")

// - Interacción con clases CSS

const box = document.querySelector(".box")
/**
 * classList: trabaja con clase del dco CSS que tenemos signado al HTML
 */
box.classList.add("selected")//classList=selecciona una clase que tenemos definida en el doc CSS y se la añadimos a los elementos que tenga la clase '.box' asignada
box.classList.remove("selected")//eliminamos esa clase.
box.classList.toggle("selected")//Toggle lo que hace es si la clase exite en el elemento lo elimina y si no existe lo añade.

const box2 = document.getElementsByClassName(".box")
box2.classList.add("selected")

/**
 * Trabaja con estilos inline del elemento seleccionado. Se modifica el estilo desde aqui y no desde el doc CSS
 * 
 */
const button = document.querySelector("button")
button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.padding = "10px"

// - Creación y eliminación de elementos

// Creación

const newParagraph = document.createElement("p")
newParagraph.textContent = "Este es un nuevo párrafo creado desde JS"
newParagraph.style.padding = "8px"

container.appendChild(newParagraph)//Añade un nuevo hijo al elemento contenedor

const itemsList = document.querySelector("ul")
const newItem = document.createElement("li")//.textContent="Nuevo Elemento"
newItem.textContent = "Nuevo elemento"

// Inserción en un lugar concreto

const secondItem = itemsList.children[1] //Seria el segundo elemento.
itemsList.insertBefore(newItem, secondItem)//Inserta el nuevo elemento antes del segundo elemento actual de la lista.

itemsList.append(newItem)//Inserta al final del listado
itemsList.prepend(newItem)//Inserta al prinicipio del listado
secondItem.before(newItem)//Accede al elemento concreto y metemos el elemento nuevo(newItem) antes del elemento secondItem
secondItem.after(newItem)//Accede al elemento concreto y metemos el elemento nuevo(newItem) despues del elemento secondItem

// Eliminación

newParagraph.remove()

// Eliminación tradicional

const parent = newParagraph.parentElement
parent.removeChild(newParagraph)

// - Elementos del DOM

function showMsg() {
    alert("Clic!")
}

const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", showMsg)

sendButton.addEventListener("click", () => {
    alert("Clic con una arrow function!")
})

// Eventos comunes

document.addEventListener("DOMContentLoader", () => { //DOMContentLoader: Cuando el DOM esta totalmente cargado. Es un evento.
    console.log("El DOM está completamente cargado")
})

sendButton.addEventListener("mouseenter", () => {// mouseenter: Cuando el raton pase por encima del elemento
    sendButton.style.backgroundColor = "green"
})

sendButton.addEventListener("mouseleave", () => {//mouseleave: se activa cuando el puntero del ratón sale de los límites de un elemento HTML específico
    sendButton.style.backgroundColor = "blue"
})

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    // Código
})