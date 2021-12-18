
var Servicio = require('./Componentes/Servicio/Modelo');

Servicio.nombre = "Servicio 1";

console.log("Servicio.nombre: " + Servicio.nombre);

var myObject = require('./Componentes/Servicio/Modelo');

//// ESTO NO SIRVE, SOLO IMPRIME LA PALABRA Object
// console.log(myObject[0].toString());


myObject.forEach(function(entry) {
    console.log(entry);
});

console.log();

myObject[0].nombre = "Editado";
  

myObject.forEach(function(entry) {
    console.log(entry);
});

// var list = [
//     { date: '12/1/2011', reading: 3, id: 20055 },
//     { date: '13/1/2011', reading: 5, id: 20053 },
//     { date: '14/1/2011', reading: 6, id: 45652 }
// ];


