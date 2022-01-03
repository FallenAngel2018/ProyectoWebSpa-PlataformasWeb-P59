
// export default: Sirve para que se pueda importar el uso de esta clase desde otra.
export default class Usuario {
    
    /* 
        Los clientes que deseen optar por estos servicios, deben registrarse,
        ingresando los siguientes datos: cédula, nombre, apellido, domicilio,
        teléfono y correo electrónico.
    */
    constructor(id_usuario, cedula, nombre, apellido, domicilio, telefono, correoelec, clave, estado_usuario) {
        this.id_usuario = id_usuario // Campo oculto (hidden)

        this.cedula = cedula 
        this.nombre = nombre
        this.apellido = apellido
        this.domicilio = domicilio 
        this.telefono = telefono 

        // Clientes: @gmail.com, @hotmail.com
        // Admin: @spaweb.com
        this.correoelec = correoelec
        this.clave = clave

        this.estado_usuario = estado_usuario

    }
   

    // Definir función
    static saveUser(user) {

        var flag_user = false;

        lista_usuarios.push(user);

        var lastElement = lista_usuarios.at(-1);

        if(user == lastElement) {
            flag_user = true;
        }

        return Boolean(flag_user);

    }


    
}

// Lista estática de usuarios
export const lista_usuarios = new Array();

lista_usuarios.push(new Usuario(1, "0952468591", "Johnny", "Lawrence", "Fishbourne #098 & Main St."
                                    , "0945754165", "cobrakai_2019@gmail.com", "hotbabes1975", true));
lista_usuarios.push(new Usuario(2, "0984518597", "Suckmy", "Suckmy", "Dick Los Esteroshhh"
                                    , "0985478520", "name@spaweb.com", "xdd", true));