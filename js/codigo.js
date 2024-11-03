window.addEventListener("click", inicio);

let sistema = new Sistema();
let contadorIds = 0;

function inicio(){
    document.querySelector("#btnRegistro").addEventListener("click", tomarDatosRegistro);
    document.querySelector("#btnLogin").addEventListener("click", iniciarSesion);
}

function registrarUsuario(){
    
}

function crearReserva(){

}

function mostrarSeccion(){

}

function ocultarSecciones(){
    let secciones = document.querySelector(".secciones");
    for(let i = 0; i < secciones.length; i++){
        secciones[i].style.display = "none";
    }
}

function tomarDatosRegistro(){
    let nombreUsuario = document.querySelector("#txtUserNameRegistro").value;
    let nombre = document.querySelector("#Nombre").value;
    let contrasenia = document.querySelector("#txtContraseñaRegistro").value;
    let existe = sistema.buscarElemento(sistema.usuarios, "nombreDeUsuario", nombreUsuario);

    if(existe){
        document.querySelector("#pMensajes").innerHTML =  `El usuario ya está en uso`; 
    }else{
        sistema.agregarNuevoUsuario();
    }
}

function iniciarSesion(){
    let nombreUsuario = document.querySelector("#txtNombreUsuarioLogin").value;
    let contraseniaUsuario = document.querySelector("#txtContraseniaLogin").value;

}


