class Cliente {
    
    /* 
        Los clientes que deseen optar por estos servicios, deben registrarse,
        ingresando los siguientes datos: cédula, nombre, apellido, domicilio,
        teléfono y correo electrónico.
    */
    constructor(id, nombre, apellido, cedula, domicilio, telefeono, correoel) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.cedula = cedula 
        this.domicilio = domicilio 
        this.telefeono = telefeono 
        this.correoel = correoel 
    }


   

    // Definir función
    saludar(fn) {
        console.log( `Hola soy ${this.nombre} ${this.apellido}` )
        if (fn) {
            fn(this.nombre, this.apellido)
        }
    }

    
}