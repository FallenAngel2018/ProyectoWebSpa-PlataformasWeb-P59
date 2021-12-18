
// export
class Servicio {
    
    // constructor() { }
    
    /* 
        Un nombre, descripción, una duración en tiempo aproximado (en
        minutos u horas), una fotografía, un valor monetario y tipo de
        servicio (VIP o normal).
    */
    constructor(nombre, descripcion, duracion, fotografia, precio, tipo_servicio) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.duracion = duracion // En minutos u horas
        this.fotografia = fotografia // Como url hacia una carpeta de imágenes
        this.precio = precio // Valor monetario
        this.tipo_servicio = tipo_servicio // VIP o normal
    }

    // services = new Service() = [
    //     {"nombre": "name1", "descripcion": "descripcion", "duracion": "5 horas", "fotografia": "url/1.jpg", 
    //     "precio": 20.4,"tipo_servicio": "VIP"},

    //     {"nombre": "name2", "descripcion": "descripcion2", "duracion": "8 horas", "fotografia": "url/2.jpg", 
    //     "precio": 5,"tipo_servicio": "Normal"},
        
    //     {"nombre": "name3", "descripcion3": "descripcion3", "duracion3": "1 hora", "fotografia": "url/3.jpg", 
    //     "precio": 15.85,"tipo_servicio": "VIP"}
        
    // ];

    services =[]

    
    
    // new Service() {
    //     new {"nombre": "name1", "descripcion": "descripcion", "duracion": "5 horas", "fotografia": "url/1.jpg", 
    //     "precio": 20.4,"tipo_servicio": "VIP"},

    //     {"nombre": "name2", "descripcion": "descripcion2", "duracion": "8 horas", "fotografia": "url/2.jpg", 
    //     "precio": 5,"tipo_servicio": "Normal"},
        
    //     {"nombre": "name3", "descripcion3": "descripcion3", "duracion3": "1 hora", "fotografia": "url/3.jpg", 
    //     "precio": 15.85,"tipo_servicio": "VIP"}
    // }   

    getServices() {
        return services;
    }

    // Definir función
    saludar(fn) {
        console.log( `Hola soy ${this.nombre} ${this.apellido}` )
        if (fn) {
            fn(this.nombre, this.apellido)
        }
    }

    // Definir función
    soy_alto(fn) {
        if (this.altura >= 1.7) {
            console.log( `Mi altura es ${this.altura} y soy alto.` )
        } else {
            console.log( `Mi altura es ${this.altura} y no soy alto.` )
        }

        if (fn) {
            fn( this.nombre )
        }
    }
}

var servicios = new Array();
servicios.push(new Servicio("name1", "descripcion", "5 horas", "url/1.jpg", 20.4, "VIP"));
servicios.push(new Servicio("name2", "descripcion2", "8 horas", "url/2.jpg", 5, "Normal"));


module.exports = Servicio; // CLass
module.exports = servicios; // Lista de la clase Servicio


// export const settingsArray = [
//     new Servicio(), {
//       nombre: " ",
//     //   data: [
//     //     {
//     //       title: "Export data",
//     //       func: exportData
//     //     }
//     //   ]
//     },
//     new Servicio(), {
//         nombre: " ",
//     //   data: [
//     //     { 
//     //       title: "Set custom code",
//     //       func: showDialog
//     //     },
//     //   ]
//     }
//   ];



