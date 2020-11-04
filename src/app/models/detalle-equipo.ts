export class DetalleEquipo {
    constructor(iddetalle_equipo='', catidad = 0, total_equipo = 0 ,  orden_instalacion='', equipo='',descripcion='', serie='', dia_instalacion='', hora_instalacion='') {
        this.iddetalle_equipo = iddetalle_equipo
        this.cantidad = catidad
        this.total_equipo = total_equipo
        this.orden_instalacion = orden_instalacion
        this.equipo = equipo,
        this.descripcion = descripcion
        this.serie = serie
        this.dia_instalacion = dia_instalacion
        this.hora_instalacion = hora_instalacion

    }
    iddetalle_equipo: string;
    cantidad: number;
    total_equipo: number;
    orden_instalacion: string;
    equipo: string;
    descripcion: string;
    serie: string;
    dia_instalacion: string;
    hora_instalacion: string;

}
