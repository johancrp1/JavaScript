// 1. Crea un array de productos

/*En tu archivo app.js, crea una lista (array) con varios productos. Cada producto debe ser un objeto con las siguientes propiedades: nombre,precio ycategoria
Crea al menos 5 productos diferentes.*/

let productos = [
    {
        nombre: "Laptop compumax",
        precio: 1000200,
        categoria: "Electrónica"
    },
    {
        nombre: "Raton inalambrico Logitech Pro",
        precio: 55000,
        categoria: "Ratones"
    },
    {
        nombre: "Teclado mecánico Corsair",
        precio: 80999,
        categoria: "Teclados"
    },
    {
        nombre: "Monitor Samsung 24 pulgadas",
        precio: 680000,
        categoria: "Monitores"
    },
    {
        nombre: "Auriculares Sony WH-1000XM4",
        precio: 150000,
        categoria: "Auriculares"

    }
];

// 2. Captura el botón

/*Desde el DOM, obtén una referencia al botón que dice “Mostrar productos”. Lo vas a usar para mostrar la lista solo cuando se haga clic.*/


// Capturamos el botón y el contenedor de la lista
const botonMostrar = document.getElementById("mostrar-productos");
const contenedorProductos = document.getElementById("contenedor-productos");


// 3. Agrega un evento al botón

/*Cuando el botón sea presionado, se debe ejecutar una función que recorra el array de productos y los muestre en pantalla.*/

// Agregamos el evento al botón
botonMostrar.addEventListener("click", function () {
  // Limpiar el contenido anterior (por si se hace clic varias veces)
    contenedorProductos.innerHTML = "";

    // Recorrer el array de productos y mostrarlos
    productos.forEach(producto => {
        const item = document.createElement("p"); //  Creamos un nuevo elemento <p> (párrafo) para mostrar el producto actual.

        item.textContent = `${producto.nombre} - $${producto.precio} - ${producto.categoria}`; // Asignamos el texto del párrafo con el nombre, precio y categoría del producto.
        contenedorProductos.appendChild(item); //Agregamos ese párrafo como hijo del div con id listaProductos, lo que hace que se muestre en la página.
    });
});

// 4. 4. Recorre el array

/*Usa un bucle (como forEach) para recorrer cada producto del array. Por cada producto:

-Crea un div con la clase producto.
-Muestra el nombre, el precio y la categoría en su interior.
-Agrega ese div al contenedor que ya existe en el HTML.*/

// Usamos forEach para recorrer cada producto
productos.forEach(producto => {
    // Creamos un div con clase "producto"
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    // Mostramos nombre, precio y categoría en su interior
    divProducto.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <p>Categoría: ${producto.categoria}</p>
    `;

    // Agregamos ese div al contenedor que ya existe en el HTML
    contenedorProductos.appendChild(divProducto);
});