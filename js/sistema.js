class Sistema{
    constructor(){
        this.destinos = [];
        this.usuarios = [];
        this.administradores = [
            new Administrador() 
        ];
        this.reservas = [];
    }

    agregarNuevoDestino(destino){
        this.destinos.push(destino);
    }

    agregarNuevoUsuario(usuario){
        this.usuarios.push(usuario);
    }

    agregarReserva(admin){
        this.administradores.push(admin);
    }

    registrarUsuario(){
        let nuevoUsuario = new Usuario(id, nombre, apellido, nombreDeUsuario, contrasenia, numeroTarjetaCredito, cvc);
        this.usuarios.push(nuevoUsuario);
    }

    buscarElemento(arrElementos, propiedad, valorBusqueda) {
        let existe = false
        for (let i = 0; i < arrElementos.length; i++) {
            const elElemento = arrElementos[i]
            if (elElemento[propiedad] === valorBusqueda) {
                existe = true
                break
            }
        }
        return existe
    }

    obtenerObjeto(arrElementos, propiedad, busqueda){
        let objeto = null;
        for (let i = 0; i < arrElementos.length; i++) {
            const unElemento = arrElementos[i];
            if(unElemento[propiedad] === busqueda){
                objeto = unElemento;
                break;
            }
        }
        return objeto;
    }


    validarCamposVaciosRegistro(nombre, apellido, nombreDeUsuario, contrasenia, numeroTarjetaCredito, cvc){
        let camposVacios = false;
        if(nombre !== "" && apellido !== "" && nombreDeUsuario !== "" && contrasenia !== "" && numeroTarjetaCredito !== "" && cvc !== ""){
            camposVacios = true;
        }
        return camposVacios;
    }


    verificarFormatoPassword(password){
        let passwordValida = false;
        let tieneMayusculas = false;
        let tieneNumeros = false;
        let tieneMinusculas = false

        for(let i = 0; i < password.length; i++){
            
            if(!isNaN(password[i])){
                tieneNumeros = true;
            }

            if(charCodeAt(password[i]) >= 65 && charCodeAt(password[i]) <= 90){
                tieneMayusculas = true;
            }

            if(charCodeAt(password[i]) >= 97 && charCodeAt(password[i]) <= 122){
                tieneMinusculas = true;
            }
        }

        if(tieneNumeros && tieneMayusculas && password.length > 5){
            passwordValida = true;
        }

        return passwordValida;
    }

}