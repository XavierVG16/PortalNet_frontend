export class Contrato {

    
    constructor(
        idcliente = '', cedula = '', nombre = '', apellido = '', direccion = '', propiedad = '', referencia = '', estado = '', descripcion_estado = '', telefono = '', email = '',
        /*datosn contrato*/
        tipo_servicio = '', tipo_enlace = '', wifi_nombre = '', wifi_clave = '', idcontrato_servicio = '',
        /** datos de la orden de contrato */
        dia_instalacion = '', hora_instalacion = '', total = '', idorden_instalacion = '',
        /** datos detalle de equipos */
        equipo = '', cantidad = 0, total_equipo = 0, iddetalle_equipo = '', cheked = false
    ) {
        this.idcliente = idcliente,
            this.cedula = cedula,
            this.nombre = nombre,
            this.apellido = apellido,
            this.direccion = direccion,
            this.propiedad = propiedad,
            this.referencia = referencia,
            this.estado = estado,
            this.descripcion_estado = descripcion_estado
        this.telefono = telefono,
            this.email = email
        /*datosn contrato*/
        this.idcontrato_servicio = idcontrato_servicio,
            this.tipo_servicio = tipo_servicio,
            this.tipo_enlace = tipo_enlace,
            this.wifi_nombre = wifi_nombre,
            this.wifi_clave = wifi_clave
        /** datos de la orden de contrato */
        this.dia_instalacion = dia_instalacion,
            this.hora_instalacion = hora_instalacion,
            this.total = total,
            this.idorden_instalacion,
            /** datos detalle de equipos */
            this.cantidad = cantidad,
            this.equipo = equipo,
            this.total,
            this.iddetalle_equipo = iddetalle_equipo,
            this.checked = cheked

    }
    idcliente: string;
    cedula: string
    nombre: string;
    apellido: string;
    direccion: string;
    propiedad: string;
    referencia: string;
    estado: string;
    descripcion_estado: string;
    telefono: string;
    email: string;
    /*datosn contrato*/
    idcontrato_servicio: string;
    tipo_servicio: string;
    tipo_enlace: string;
    wifi_nombre: string;
    wifi_clave: string;
    /** datos de la orden de contrato */
    dia_instalacion: string;
    hora_instalacion: string;
    total: string;
    idorden_instalacion: string;
    /** datos detalle de equipos */
    equipo: string;
    cantidad: number;
    total_equipo: number;
    iddetalle_equipo: string;
    checked: boolean;

    
}
