
// Hola
// export 
// class Servicio {
export default class Servicio {
    
    /* 
        Un nombre, descripción, una duración en tiempo aproximado (en
        minutos u horas), una fotografía, un valor monetario y tipo de
        servicio (VIP o normal).    
    */
    constructor(id, nombre, descripcion, duracion, fotografia, precio, tipo_servicio, estado) {
        this.id = id // Valor oculto (hidden)
        this.nombre = nombre
        this.descripcion = descripcion
        this.duracion = duracion // En minutos u horas
        this.fotografia = fotografia // Solo será el nombre de la imagen que se suba al sistema
        this.precio = precio // Valor monetario
        this.tipo_servicio = tipo_servicio // VIP o normal
        this.estado = estado // ACTIVO o INACTIVO

    }


    // lista_servicios = []

    // lista_servicios = [
    //     new Servicio(1, "Masaje asiático", "descripcion", 300, "url/1.jpg", 20.4, "2", true),
    //     new Servicio(2, "Acupuntura abdominal", "descripcion2", 480, "url/2.jpg", 50, "1", false),
    //     new Servicio(3, "Depilación", "descripcion3", 30, "url/3.jpg", 12.35, "1", false),
    //     new Servicio(4, "Facial", "descripcion4", 30, "url/4.jpg", 15.50, "1", true),
    //     new Servicio(5, "Masaje", "descripcion5", 60, "url/5.jpg", 20, "1", true),
        

    // ]

    // static getLista_Servicios() {
    //     return lista_servicios;
    // }


    // #lista_servicios2 = []

    // #lista_servicios2 = [
    //     new Servicio(1, "Masaje asiático", "descripcion", 300, "url/1.jpg", 20.4, "2", true),
    //     new Servicio(2, "Acupuntura abdominal", "descripcion2", 480, "url/2.jpg", 50, "1", false),
    //     new Servicio(3, "Depilación", "descripcion3", 30, "url/3.jpg", 12.35, "1", false),
    //     new Servicio(4, "Facial", "descripcion4", 30, "url/4.jpg", 15.50, "1", true),
    //     new Servicio(5, "Masaje", "descripcion5", 60, "url/5.jpg", 20, "1", true),
    //     new Servicio(6, "Masaje VIP cuerpo completo", "Masaje de cuerpo completo con aloe vera, rocas calientes y sí se desea en el momento también con acupuntura especializada."
    //     , 90, "url/6.jpg", 40.35, "2", true),

    // ]

    // static getLista_Servicios2() {
    //     return this.#lista_servicios2;
    // }



    // Definir función
    static saveService(service) {
        // var servicio = Object.assign(this.Servicio(), data);

        var lista_servicios = JSON.parse(localStorage.getItem("lista_servicios"));
        
        var flag_service = false;

        lista_servicios.push(service);

        var lastElement = lista_servicios.at(-1);

        if(service == lastElement) {
            flag_service = true;

            localStorage.setItem("lista_servicios", JSON.stringify(lista_servicios));

        }

        return Boolean(flag_service);

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

// Tal vez haya que hacer esta lista parte
// de la clase Servicio para hacerla privada
// Fuente: https://www.c-sharpcorner.com/article/encapsulation-in-javascript/#:~:text=Using%20a%20little%20finesse%2C%20we,vanilla%20JavaScript%20(ES6)%20classes.&text=To%20do%20this%2C%20we%20can,operate%20on%20these%20encapsulated%20variables.

// // Lista estática de servicios
// export const lista_servicios = new Array();
//                                                         // 5 horas en minutos                2 = VIP
// lista_servicios.push(new Servicio(1, "Masaje asiático", "descripcion", 300, "url/1.jpg", 20.4, "2", true));
// // lista_servicios.push(new Servicio(1, "Masaje asiático", "descripcion", 300, "url/1.jpg", 20.4, "2", true));
//                                                                // 8 horas en minutos u horas     1 = Normal
// lista_servicios.push(new Servicio(2, "Acupuntura abdominal", "descripcion2", 480, "url/2.jpg", 50, "1", false));
// lista_servicios.push(new Servicio(3, "Depilación", "descripcion3", 30, "url/3.jpg", 12.35, "1", false));
// lista_servicios.push(new Servicio(4, "Facial", "descripcion4", 30, "url/4.jpg", 15.50, "1", true));
// lista_servicios.push(new Servicio(5, "Masaje", "descripcion5", 60, "url/5.jpg", 20, "1", true));
// lista_servicios.push(new Servicio(6, "Masaje VIP cuerpo completo", "Masaje de cuerpo completo con aloe vera, rocas calientes y sí se desea en el momento también con acupuntura especializada."
// , 90, "url/6.jpg", 40.35, "2", true));





// Lista de la clase Servicio

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



