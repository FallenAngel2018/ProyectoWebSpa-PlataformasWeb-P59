
// export default: Sirve para que se pueda importar el uso de esta clase desde otra.
export default class Usuario {
    
    /* 
        Los clientes que deseen optar por estos servicios, deben registrarse,
        ingresando los siguientes datos: cédula, nombre, apellido, domicilio,
        teléfono y correo electrónico.
    */
    constructor(id, nombre, apellido, cedula, domicilio, telefono, correoelec, clave) {
        this.id = id // Campo oculto (hidden)

        this.cedula = cedula 
        this.nombre = nombre
        this.apellido = apellido
        this.domicilio = domicilio 
        this.telefono = telefono 

        // @gmail.com, @hotmail.com: Clientes
        // @spaweb.com: Admin
        this.correoelec = correoelec
        this.clave = clave

    }
   

    // Definir función
    saludar(fn) {
        console.log( `Hola soy ${this.nombre} ${this.apellido}` )
        if (fn) {
            fn(this.nombre, this.apellido)
        }
    }

    
}