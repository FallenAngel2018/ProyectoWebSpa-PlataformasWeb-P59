
/* Primera manera */
// var Servicio = require('./Componentes/Servicio/Modelo');

// Servicio.nombre = "Servicio 1";

// console.log("Servicio.nombre: " + Servicio.nombre);


/* Segunda manera */

// Obtiene la lista llamada "servicios" de la clase Modelo
var myObject = require('./Componentes/Servicio/Modelo');
// var Servicio = require('./Componentes/Servicio/Modelo');

//// ESTO NO SIRVE, SOLO IMPRIME LA PALABRA Object
// console.log(myObject[0].toString());

// var s = new Servicio();


// var serv = require('./Componentes/Servicio/Modelo');

// import { serv } from './Componentes/Servicio/Modelo';

import {
    serv,
} from "./Componentes/Servicio/Modelo"

console.log("OBJETO serv vacío");

serv.forEach(function(element) {
    console.log(element);
});

console.log("FIN OBJETO serv vacío");


myObject.forEach(function(element) {
    console.log(element);
});


// 1) Imprimir lista/objeto "servicios" dentro de la clase Modelo.js
myObject.forEach(function(element) {
    console.log(element);
});


console.log(); // Espacio en blanco


// 2) Editar el... (Completa lo que estoy haciendo aquí)
myObject[0].nombre = "Editado"; 
  

// Imprimir lista "services" 
myObject.forEach(function(element) {
    console.log(element);
});

console.log();

// 3) Elimina el objeto que está al final del arreglo o lista
myObject.pop();

// Imprime lista actualizada
myObject.forEach(function(x) {
    console.log(x);
});




// var list = [
//     { date: '12/1/2011', reading: 3, id: 20055 },
//     { date: '13/1/2011', reading: 5, id: 20053 },
//     { date: '14/1/2011', reading: 6, id: 45652 }
// ];