
export default class Sucursal {
    /* 
        La empresa tiene varios Spa en diferentes lugares de la ciudad de
        Guayaquil, mostrar la siguiente información adicional: nombre,
        dirección, punto geográfico en Google Maps, galería de imágenes
        del spa. 
    */
    constructor(id_sucursal, nombre_sucursal, direccion_sucursal, latitud_sucursal, longitud_sucursal, estado_sucursal) {
        this.id_sucursal = id_sucursal // Valor oculto (hidden)
        this.nombre_sucursal = nombre_sucursal
        this.direccion_sucursal = direccion_sucursal
        this.latitud_sucursal = latitud_sucursal
        this.longitud_sucursal = longitud_sucursal
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

