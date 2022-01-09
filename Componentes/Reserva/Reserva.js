
export default class Reserva {
    
    /* 
        Se puede reservar, pero para ello el cliente debe registrarse en el sistema,
        y seleccionar el servicio o los servicios que desea, al realizar esta selección
        se debe presentar el total a pagar incluyendo el IVA.
        En la reserva debe seleccionar la sucursal, el día y hora que puede asistir
        dentro de los turnos de atención de los Spa (no se consideran si existen
        solapamientos de horarios con respecto a otros clientes con el mismo servicio o sucursal).
    */
    constructor(id_reserva, id_detalleReserva, id_sucursal, id_cliente, id_servicio, dia_reserva, horario_reserva, total_reserva, estado_reserva) {
        this.id_reserva = id_reserva // Valor oculto (hidden), se suma 1 al último Id añadido de la lista.
        this.id_detalleReserva = id_detalleReserva // Valor oculto (hidden), se suma 1 al último Id añadido de la lista.
        this.id_sucursal = id_sucursal // Valor oculto (hidden), se obtiene de un combobox.
        this.id_cliente = id_cliente // Valor oculto (hidden), se obtiene de la sesión iniciada.
        
        // Se obtendrán las filas de la tabla de servicios
        // que el cliente haya escogido, y por debajo se asignará
        // su respectivo Id, para ser agregado y referenciado
        // con el servicio o los servicios que el cliente contrate.
        this.id_servicio = id_servicio

        this.dia_reserva = dia_reserva // 22/05/2022

        // 1: Mañana (9h00 a 13h00)
        // 2: Tarde (14h00 a 18h00)
        // 3: Noche (18h00 a 21h00)
        this.horario_reserva = horario_reserva
        this.total_reserva = total_reserva
        this.estado_reserva = estado_reserva // ACTIVO o INACTIVO
    }


    // Definir función
    static saveBooking(booking) {

        var flag_booking = false;

        lista_reservas.push(booking);

        var lastElement = lista_reservas.at(-1);

        if(booking == lastElement) {
            flag_booking = true;
        }

        return Boolean(flag_booking);

    }

    
}
    

// Tal vez haya que hacer esta lista parte
// de la clase Servicio para hacerla privada
// Fuente: https://www.c-sharpcorner.com/article/encapsulation-in-javascript/#:~:text=Using%20a%20little%20finesse%2C%20we,vanilla%20JavaScript%20(ES6)%20classes.&text=To%20do%20this%2C%20we%20can,operate%20on%20these%20encapsulated%20variables.

// // Lista estática de reservas
// export const lista_reservas = new Array();

// lista_reservas.push(new Reserva(1, 2, 1, 4, "1", true));
// lista_reservas.push(new Reserva(1, 2, 1, 2, "3", true));
// lista_reservas.push(new Reserva(1, 2, 1, 1, "2", true));



