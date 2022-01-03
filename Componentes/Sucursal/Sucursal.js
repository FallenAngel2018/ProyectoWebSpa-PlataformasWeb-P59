

export default class Sucursal {
    
    /* 
        La empresa tiene varios Spa en diferentes lugares de la ciudad de
        Guayaquil, mostrar la siguiente información adicional: nombre,
        dirección, punto geográfico en Google Maps, galería de imágenes
        del spa. 
    */
    constructor(id_sucursal, direccion_sucursal, punto_geografico_sucursal, estado_sucursal) {
        this.id_sucursal = id_sucursal // Valor oculto (hidden)
        this.nombre_sucursal = nombre_sucursal
        this.direccion_sucursal = direccion_sucursal
        this.punto_geografico_sucursal = punto_geografico_sucursal
        this.estado_sucursal = estado_sucursal // ACTIVO o INACTIVO
    }


    // Definir función
    static saveAgency(agency) {

        var flag_agency = false;

        lista_sucursales.push(agency);

        var lastElement = lista_sucursales.at(-1);

        if(agency == lastElement) {
            flag_agency = true;

        }

        return Boolean(flag_agency);

    }


}

// Tal vez haya que hacer esta lista parte
// de la clase Servicio para hacerla privada
// Fuente: https://www.c-sharpcorner.com/article/encapsulation-in-javascript/#:~:text=Using%20a%20little%20finesse%2C%20we,vanilla%20JavaScript%20(ES6)%20classes.&text=To%20do%20this%2C%20we%20can,operate%20on%20these%20encapsulated%20variables.

// Lista estática de sucursales
export const lista_sucursales = new Array();

lista_sucursales.push(new Sucursal(1, "Sucursal Sur", "Los Almendros", "300,5000,4444", true));
lista_sucursales.push(new Sucursal(2, "Sucursal Norte", "La Alborada", "300,7060,4554", true));
lista_sucursales.push(new Sucursal(3, "Sucursal Centro", "9 de Octubre y Junin", "353,0394,2634", true));

