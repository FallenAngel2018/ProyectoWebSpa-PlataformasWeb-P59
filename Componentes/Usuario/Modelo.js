
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

        var lista_usuarios = JSON.parse(localStorage.getItem("lista_usuarios"));

        var flag_user = false;

        lista_usuarios.push(user);

        var lastElement = lista_usuarios.at(-1);

        if(user == lastElement) {
            flag_user = true;

            // Los agrega en sesión para consultarse desde otras ventanas
            localStorage.setItem("lista_usuarios", JSON.stringify(lista_usuarios));

        }

        return Boolean(flag_user);

    }

    static checkIfUserExists(usuario) {
        console.log("MÉTODO checkIfUserExists - Usuario ya existe, cédula o correo electrónico repetidos.");

        var lista_usuarios = JSON.parse(localStorage.getItem("lista_usuarios"));
        var user_exists = false;

        // console.log({usuario})

        // Itera sobre la lista de usuarios...
        lista_usuarios.forEach(user => {

            if(usuario.cedula == user.cedula || usuario.correoelec == user.correoelec) {
                user_exists = true;
            }

        });

        return Boolean(user_exists);

    }

    static loginValidation(usuario) {

        var lista_usuarios = JSON.parse(localStorage.getItem("lista_usuarios"));
        var flag_login = false;

        // console.log({usuario})

        // Itera sobre la lista de usuarios...
        lista_usuarios.forEach(user => {

            if(usuario.correoelec == user.correoelec && usuario.clave == user.clave) {
                flag_login = true;
            }

        });

        return Boolean(flag_login);

    }

    static GetUserId(usuario) {

        var lista_usuarios = JSON.parse(localStorage.getItem("lista_usuarios"));
        var id = 0;

        // Itera sobre la lista de usuarios...
        lista_usuarios.forEach(user => {

            if(usuario.correoelec == user.correoelec && usuario.clave == user.clave) {
                id = parseInt(user.id_usuario);
            }

        });

        return id;

    }



}


