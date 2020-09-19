export class OrdenInstalacion {
    constructor(idorden_instalacion = '', dia_instalacion = '', hora_instalacion = '', n_equipo = '', cantidad = '') {
        this.idorden_instalacion = idorden_instalacion,
            this.dia_instalacion = dia_instalacion,
            this.hora_instalacion = hora_instalacion,
            this.n_equipo = n_equipo,
            this.cantidad = cantidad
    }
    idorden_instalacion: string;
    dia_instalacion: string;
    hora_instalacion: string;
    n_equipo: string;
    cantidad: string;
}

