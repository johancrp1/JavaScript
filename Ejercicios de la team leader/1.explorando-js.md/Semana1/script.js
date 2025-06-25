//Parte 2: Variables y Tipos de Datos

//2.1 Declara una variable nombre y asígnale tu nombre. Luego, muestra un saludo en la consola que diga "Hola, [nombre]".

let nombre = "Yohann Exneider Rodas Arango";
console.log("Hola, " + nombre);

//2.2 Crea tres variables: una con un número entero, otra con un número decimal y otra con una cadena de texto. Muestra cada una en la consola usando console.log().

let numeroEntero = 80;
let numeroDesimal = 6.44;
let cadenaTexto = "Hola, mundo!";

console.log(numeroEntero);
console.log(numeroDesimal);
console.log(cadenaTexto);

//2.3 Declara una constante llamada PI con el valor 3.1416. Intenta cambiar su valor y observa qué sucede.

const PI = 3.1416;
console.log(PI)

// PI = 3.12; Si Intento asignarle un nuevo valor se producirá un error

//2.4 Declara una variable sin asignarle valor. Muestra en consola qué contiene.

let variableVacia;
console.log(variableVacia);

//Aparece este mensaje al mostrar en consola "undefined"

//2.5 Crea una variable con valor null y otra con un valor booleano. Muestra ambos en consola.

let variableNull = null;
let variableBooleana = true;

console.log("Variable con valor null:", variableNull);
console.log("Variable booleana", variableBooleana)

//Parte 3: Entrada y Salida de Datos

//3.1 Usa prompt() para pedirle al usuario su edad y guárdala en una variable. Luego, muestra en consola un mensaje que diga "Tienes [edad] años".

//let edad = prompt("Por favor, ingresa tu edad: ");
//console.log("Tienes " + edad, "años");

//3.2 Usa alert() para mostrar un mensaje de bienvenida.

alert("Bienvenidos");

//3.3 Usa confirm() para preguntar al usuario si desea continuar. Muestra en consola el valor que devuelve esta función.

let mensaje = "¿Deseas continuar?";
let resultado = confirm(mensaje);
console.log(resultado);

//Parte 4: Operadores

//4.1 Declara dos variables numéricas. Realiza y muestra los resultados de las siguientes operaciones: suma, resta, multiplicación, división y módulo.

let num1 = 15;
let num2 = 2;

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicación = num1 * num2;
let división = num1 / num2;

console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicacion es: " + multiplicación);
console.log("La divicion es: " + división);

//4.2 Declara dos variables con cadenas de texto y únelas en una nueva variable usando el operador de concatenación.

let cadena1 = "Yohann";
let cadena2 = "Arango";
let cadenaUnida = cadena1 + " " + cadena2;

console.log(cadenaUnida);

//4.3 Evalúa y muestra en consola el resultado de las siguientes comparaciones:

// 5 == "5"
// 5 === "5"
// true && false
// false || true
// !true

console.log(5 == "5");
console.log(5 === "5");
console.log(true && false);
console.log(false || true);
console.log(!true);

//Parte 5: Condicionales

//5.1 Crea un programa que pida al usuario un número y muestre en consola si es mayor, menor o igual a 10.

let numero = prompt("Ingresa un numero:");

numero = Number(numero);

if (numero > 10) {
    console.log("El número es mayor que 10.");
} else if (numero < 10) {
    console.log("El número es menor que 10.");
} else {
    console.log("El número es igual a 10.");
}

//5.2 Crea un programa que solicite el nombre de un usuario y compare si se llama "Admin". Si es así, muestra un mensaje de bienvenida especial, de lo contrario, un mensaje genérico.

let nombreDeUsuario = prompt("Ingresa tu nombre de usuario")

if (nombreDeUsuario === "Admin") {
    console.log("¡Bienvenido, Administrador!");
    } else{
        console.log("No eres administrador");
    }

//5.3 Usa el operador ternario para mostrar si un número ingresado es par o impar.

// let numero = 7;
// let resultado = numero % 2 === 0 ? "Par" : "Impar";
// console.log(resultado);

//Parte 6: Consola del Navegador

//Un mensaje informativo (console.info)
console.info("Este es un mensaje informativo");

//Un mensaje de advertencia (console.warn)
console.warn("Este es un mensaje de advertencia")

//Un mensaje de error (console.error)
console.error("Este es un mensaje de error")

//Un grupo de mensajes (console.group y console.groupEnd)

console.group("Primer grupo");
console.log("Este mensaje está en el primer grupo");
console.log("Otro mensaje en el primer grupo");

    console.group("Segundo grupo anidado");
    console.log("Mensaje en el segundo grupo");
    console.groupEnd();

console.groupEnd();

//El tiempo que tarda un bloque de código en ejecutarse (console.time y console.timeEnd)

//console.time("tiempoTotal");

//let suma = 0;
//for (let i = 0; i < 1000000; i++) {
    suma += i;
//}

console.timeEnd("tiempoTotal");




