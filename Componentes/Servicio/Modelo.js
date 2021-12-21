
// Hola
class Servicio {
    
    // constructor() { }
    
    /* 
        Un nombre, descripción, una duración en tiempo aproximado (en
        minutos u horas), una fotografía, un valor monetario y tipo de
        servicio (VIP o normal).
    */
    constructor(id, nombre, descripcion, duracion, fotografia, precio, tipo_servicio, estado) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.duracion = duracion // En minutos u horas
        this.fotografia = fotografia // Como url hacia una carpeta de imágenes
        this.precio = precio // Valor monetario
        this.tipo_servicio = tipo_servicio // VIP o normal
        this.estado = estado // ACTIVO o INACTIVO
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

/*
    El Spa ofrece los siguientes servicios: depilación, faciales y masajes,
    el sistema debe permitir agregar otros servicios. 
*/

// Lista estática de servicios
const servicios = new Array();
                                                // 5 horas en minutos
servicios.push(new Servicio(1, "name1", "descripcion", 300, "url/1.jpg", 20.4, "VIP", true));
                                                // 8 horas en minutos
servicios.push(new Servicio(2, "name2", "descripcion2", 480, "url/2.jpg", 50, "Normal", false));
servicios.push(new Servicio(3, "Depilación", "descripcion3", 30, "url/2.jpg", 12.35, "Normal", true));
servicios.push(new Servicio(4, "Facial", "descripcion4", 30, "url/2.jpg", 15.50, "Normal", true));
servicios.push(new Servicio(5, "Masaje", "descripcion5", 60, "url/2.jpg", 20, "Normal", true));
servicios.push(new Servicio(6, "Masaje VIP cuerpo completo", "Masaje de cuerpo completo con aloe vera, rocas calientes y sí se desea en el momento también con acupuntura especializada."
, 90, "url/2.jpg", 40.35, "VIP", true));


module.exports = Servicio; // Class
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



