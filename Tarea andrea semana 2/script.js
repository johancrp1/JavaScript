//Parte 1: Arrays orientados al DOM

/* 1. Tienes un array de colores. Recorre ese array y crea un mensaje por cada color en formato: "El color X es muy bonito". Imagina que luego mostrarás cada mensaje en un <div>.*/

let colores = ["Naranjado", "azul", "verde", "amarillo", "morado"];

// Obtener el contenedor del DOM
let contenedor = document.getElementById("contenedor");

// Recorrer el array de colores y crear los mensajes
colores.forEach(color => {
    const mensaje = `El color ${color} es muy bonito`;

    const div = document.createElement("div");
    div.textContent = mensaje;

    contenedor.appendChild(div);
});

/* 2. A partir de un array de frases motivadoras, crea un nuevo array donde cada frase esté envuelta en una etiqueta HTML (por ejemplo: <p>). Esto te ayudará a simular contenido que luego iría al DOM. */

const frases = [
    "Sigue adelante, lo mejor está por venir.",
    "Cree en ti mismo y todo será posible.",
    "Cada día es una nueva oportunidad.",
    "El esfuerzo de hoy es el éxito de mañana."
];

// Crear un nuevo array con cada frase envuelta en <p>
const frasesHTML = frases.map(frase => `<p>${frase}</p>`);

console.log(frasesHTML);

/* 3. Recorre un array de números y devuelve otro array de <li> con cada número. Piensa que será una lista HTML para mostrar luego en pantalla. */

const numeros = [10, 20, 30, 40, 50];

// Crear un nuevo array con cada número envuelto en <li>
const listaHTML = numeros.map(numero => `<li>${numero}</li>`);

console.log(listaHTML);

// Parte 2: Objetos pensados para mostrarse

/* 1. Dado un objeto persona con nombre, edad y ocupación, construye un string en formato HTML para mostrar esa información como una tarjeta. */


let persona = {
    nombre: "Yohann Arango",
    edad: 26,
    ocupacion: "Developer"
};

//CreO un string HTML para mostrarlo como tarjeta:
const tarjetaHTML = `
    <div class="tarjeta">
        <h2>${persona.nombre}</h2>
        <p><strong>Edad:</strong> ${persona.edad}</p>
        <p><strong>Ocupación:</strong> ${persona.ocupacion}</p>
    </div>
`;

//mostrar en el DOM
document.getElementById("contenedor2").innerHTML = tarjetaHTML;

/* 2. A partir de un objeto que representa una canción (titulo, artista, duracion), crea una estructura HTML en formato <div> que contenga esa información. Piensa cómo inyectarías eso al DOM. */

let cancion = {
    titulo: "Yo sigo firme",
    artista: "Rainer",
    duracion: "3:09"
};

const cancionHTML = `
    <div class="cancion">
        <h3>${cancion.titulo}</h3>
        <p><strong>Artista:</strong> ${cancion.artista}</p>
        <p><strong>Duración:</strong> ${cancion.duracion}</p>
    </div>
`;

//Asi inyectaria la informacion de la cancion al DOM
document.getElementById("info_cancion").innerHTML = cancionHTML;

/* 3. Dado un objeto con múltiples propiedades (como producto.nombre, producto.precio, producto.stock), construye una lista <ul> donde cada propiedad sea un <li> con clave y valor. */

let producto = {
    nombre: "Laptop Lenovo",
    precio: "$850000",
    categoria: "Tecnología"
};

// Crear la lista de <li> usando Object.entries()
const listaProductHTML = Object.entries(producto).map(([clave, valor]) => {
    return `<li><strong>${clave}:</strong> ${valor}</li>`;
}).join("");

// Envolver en una <ul>
const ulHTML = `<ul>${listaHTML}</ul>`;

// Parte 3: Listas de Objetos enfocadas en visualización

/* 1. Recorre un array de usuarios (con nombre y correo) y crea un array de etiquetas <div> que incluyan esa información formateada como tarjeta de contacto. */

let usuarios = [
    { nombre: "Marlon Rodriguez", correo: "Marlon@Hotmail.com" },
    { nombre: "Sergio lopez", correo: "Sergio@Hotmail.com" },
    { nombre: "Nicolas Arango", correo: "Nicolas@hotmail.com" }
];

//Creo el array de tarjetas en <div>:
const tarjetas = usuarios.map(function(usuario) {
    return `
        <div class="tarjeta-contacto">
        <h3>${usuario.nombre}</h3>
        <p><strong>Correo:</strong> ${usuario.correo}</p>
        </div>
    `;
});

//Insertando targetas al DOM
document.getElementById("lista-usuarios").innerHTML = tarjetas.join("");

/* 2. Dado un array de libros con titulo, autor y año, transforma cada uno en una cadena de texto con formato: "Título (Año) - Autor". Luego imagina que cada una irá dentro de un <li>. */

const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 2002 },
    { titulo: "Quijote de la mancha", autor: "Don Quijote", año: 1976 },
    { titulo: "El Dragon", autor: "Sergio busquet", año: 1987 }
];

//Transformo cada libro en una cadena con el formato: "Título (Año) - Autor", envuelto en una etiqueta <li>:
const listaLibros = libros.map(function(libro) {
    return `<li>${libro.titulo} (${libro.año}) - ${libro.autor}</li>`;
});

//insertandolo en el DOM
document.getElementById("lista-libros").innerHTML = listaLibros.join("");


/* 3. Tienes una lista de tareas (con descripcion y completada). Crea una función que genere una estructura HTML diferente si la tarea está completa o pendiente. Por ejemplo: mostrar un ✅ o ❌ antes del texto. */

//Lista de tareas

const tareas = [
    { descripcion: "Estudiar JavaScript", completada: true },
    { descripcion: "Hacer ejercicio", completada: false },
    { descripcion: "Leer un libro", completada: true },
    { descripcion: "Lavar los platos", completada: false }
];


// Función que genera HTML con iconos:
function generarHTMLTareas(tareas) {
    return tareas.map(function(tarea) {
        const icono = tarea.completada ? "✅" : "❌";
        return `<li>${icono} ${tarea.descripcion}</li>`;
    }).join("");
}

//Insertandolo al dom
document.getElementById("lista-tareas").innerHTML = generarHTMLTareas(tareas);