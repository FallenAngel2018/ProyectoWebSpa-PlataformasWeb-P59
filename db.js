
// // // Fuente: https://stackoverflow.com/questions/9943220/how-to-delete-a-localstorage-item-when-the-browser-window-tab-is-closed
// localStorage.removeItem("lista_servicios");
// localStorage.removeItem("lista_usuarios");
// localStorage.removeItem("lista_usuarios2");
// localStorage.removeItem("lista_sucursales");
// localStorage.removeItem("lista_reservas");


import Servicio from './Componentes/Servicio/Modelo.js'

var verificar_lista_servicios = localStorage.getItem("lista_servicios");

// console.log({verificar_lista_servicios});

// Si viene null...
if (!verificar_lista_servicios) {

    // Lista estática de servicios
    const lista_servicios = new Array();
    // export const lista_servicios = new Array();
    // 5 horas en minutos                2 = VIP
    lista_servicios.push(new Servicio(1, "Masaje asiático", "descripcion", 300, "Servicio Masaje asiático.jpg", 20.4, "2", true));
        // 8 horas en minutos u horas     1 = Normal
    lista_servicios.push(new Servicio(2, "Acupuntura abdominal", "descripcion2", 480, "url/2.jpg", 50, "1", false));
    lista_servicios.push(new Servicio(3, "Depilación", "descripcion3", 30, "url/3.jpg", 12.35, "1", false));
    lista_servicios.push(new Servicio(4, "Facial", "descripcion4", 30, "canasta de compra online.png", 15.50, "1", true));
    lista_servicios.push(new Servicio(5, "Masaje", "descripcion5", 60, "url/5.jpg", 20, "1", true));
    lista_servicios.push(new Servicio(6, "Masaje VIP cuerpo completo", "Masaje de cuerpo completo con aloe vera, rocas calientes y sí se desea en el momento también con acupuntura especializada."
    , 90, "url/6.jpg", 40.35, "2", true));

    // Se setea la lista_servicios en el localStorage
    localStorage.setItem("lista_servicios", JSON.stringify(lista_servicios));

    verificar_lista_servicios = JSON.parse(localStorage.getItem("lista_servicios"));


} else {
    verificar_lista_servicios = JSON.parse(localStorage.getItem("lista_servicios"));
}

console.log({verificar_lista_servicios});



import Usuario from './Componentes/Usuario/Modelo.js'

var verificar_lista_usuarios = localStorage.getItem("lista_usuarios");

// console.log({verificar_lista_usuarios});

// Si viene null...
if (!verificar_lista_usuarios) {

    // Lista estática de usuarios
    const lista_usuarios = new Array();

    lista_usuarios.push(new Usuario(1, "0952468591", "Johnny", "Lawrence", "Fishbourne #098 & Main St."
                                        , "0945754165", "cobrakai_2019@gmail.com", "hotbabes1975", true));
    lista_usuarios.push(new Usuario(2, "0984518597", "Suckmy", "Suckmy", "Dick Los Esteroshhh"
                                        , "0985478520", "name@spaweb.com", "xdd", true));
    // Se setea la lista_usuarios en el localStorage
    localStorage.setItem("lista_usuarios", JSON.stringify(lista_usuarios));

    // Prueba solo para obtener la lista que se acaba de setear en el localStorage
    verificar_lista_usuarios = JSON.parse(localStorage.getItem("lista_usuarios"));

}

// console.log({verificar_lista_usuarios});



import Sucursal from './Componentes/Sucursal/Sucursal.js'

var verificar_lista_sucursales = localStorage.getItem("lista_sucursales");

// console.log({verificar_lista_sucursales});

// Si viene null...
if (!verificar_lista_sucursales) {

    // Lista estática de sucursales
    const lista_sucursales = new Array();

    lista_sucursales.push(new Sucursal(1, "Sucursal Sur", "Los Almendros", "-2.2557535593571036", "-79.89918395689483", true));
    lista_sucursales.push(new Sucursal(2, "Sucursal Norte", "La Alborada", "-2.104843657222783", "-79.8655563574946", true));
    lista_sucursales.push(new Sucursal(3, "Sucursal Centro", "9 de Octubre y Junin", "-2.2106090820400985", "-79.89722507880677", true));

    // Se setea la lista_usuarios en el localStorage
    localStorage.setItem("lista_sucursales", JSON.stringify(lista_sucursales));

    verificar_lista_sucursales = JSON.parse(localStorage.getItem("lista_sucursales"));

}

// console.log({verificar_lista_sucursales});



import Reserva from './Componentes/Reserva/Reserva.js'

var verificar_lista_reservas = localStorage.getItem("lista_reservas");

// console.log({verificar_lista_reservas});

// Si viene null...
if (!verificar_lista_reservas) {

    // Lista estática de reservas
    const lista_reservas = new Array();

    lista_reservas.push(new Reserva(1, 2, 1, 4, "1", true));
    lista_reservas.push(new Reserva(1, 2, 1, 2, "3", true));
    lista_reservas.push(new Reserva(1, 2, 1, 1, "2", true));

    // Se setea la lista_usuarios en el localStorage
    localStorage.setItem("lista_reservas", JSON.stringify(lista_sucursales));

    verificar_lista_reservas = JSON.parse(localStorage.getItem("lista_reservas"));

}

// console.log({verificar_lista_reservas});





/* Primera manera */
// var Servicio = require('./Componentes/Servicio/Modelo');

// Servicio.nombre = "Servicio 1";

// console.log("Servicio.nombre: " + Servicio.nombre);


/* Segunda manera */

// // Obtiene la lista llamada "servicios" de la clase Modelo
// var myObject = require('./Componentes/Servicio/Modelo');
// // var Servicio = require('./Componentes/Servicio/Modelo');

//// ESTO NO SIRVE, SOLO IMPRIME LA PALABRA Object
// console.log(myObject[0].toString());

// var s = new Servicio();


// var serv = require('./Componentes/Servicio/Modelo');

// import { serv } from './Componentes/Servicio/Modelo';

// import {
//     serv,
// } from "./Componentes/Servicio/Modelo"

// console.log("OBJETO serv vacío");

// serv.forEach(function(element) {
//     console.log(element);
// });

// console.log("FIN OBJETO serv vacío");


// myObject.forEach(function(element) {
//     console.log(element);
// });


// // 1) Imprimir lista/objeto "servicios" dentro de la clase Modelo.js
// myObject.forEach(function(element) {
//     console.log(element);
// });


// console.log(); // Espacio en blanco


// // 2) Editar el... (Completa lo que estoy haciendo aquí)
// myObject[0].nombre = "Editado"; 
  

// // Imprimir lista "services" 
// myObject.forEach(function(element) {
//     console.log(element);
// });

// console.log();

// // 3) Elimina el objeto que está al final del arreglo o lista
// myObject.pop();

// // Imprime lista actualizada
// myObject.forEach(function(x) {
//     console.log(x);
// });




// // var list = [
// //     { date: '12/1/2011', reading: 3, id: 20055 },
// //     { date: '13/1/2011', reading: 5, id: 20053 },
// //     { date: '14/1/2011', reading: 6, id: 45652 }
// // ];