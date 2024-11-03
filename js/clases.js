class Usuario{
    constructor(id, nombre, apellido, nombreDeUsuario, contrasenia, numeroTarjetaCredito, cvc){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreDeUsuario = nombreDeUsuario;
        this.contrasenia = contrasenia;
        this.numeroTarjetaCredito = numeroTarjetaCredito;
        this.cvc = cvc;
        this.saldoInicial = 15000;
    }

}

class Administrador{
    constructor(id, nombre, apellido, nombreDeUsuario, contrasenia){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreDeUsuario = nombreDeUsuario;
        this.contrasenia = contrasenia;
    }
}

class Destino{
    constructor(nombreDestino, precioPorNoche, cuposDisponibles, imagen, estaEnOferta, descripcion){
        this.nombreDestino = nombreDestino;
        this.precioPorNoche = precioPorNoche;
        this.cuposDisponibles = cuposDisponibles;
        this.imagen = imagen;
        this.estaEnOferta = estaEnOferta;
        this.descripcion = descripcion;
    }
}