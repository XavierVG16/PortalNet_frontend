import { Data } from '@angular/router'

export class Contrato {

    
    constructor(
        idcliente = '', cedula = '', nombre = '', apellido = '', direccion = '', propiedad = '', referencia = '', estado = '', descripcion_estado = '', telefono = '', email = '',
        /*datosn contrato*/
        tipo_servicio = '', tipo_enlace = '', wifi_nombre = '', wifi_clave = '', wifi_nombre2 = '', wifi_clave2 = '', idcontrato_servicio = '',
        /** datos de la orden de contrato */
        dia_instalacion = '', hora_instalacion = '', total = '', idorden_instalacion = '',
        /** datos detalle de equipos */
        equipo = '', cantidad = 0, total_equipo = 0, iddetalle_equipo = '', disabled = false,
        nombre_plan = '', precio = '', descripcion= '',
        fecha_pago_prox = '' ,idfactura='',fecha_actual='', fecha_pago='' , fecha_pago2='', idusuario=''
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
            this.wifi_clave = wifi_clave,
              this.wifi_nombre2 = wifi_nombre2,
            this.wifi_clave2 = wifi_clave2
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
            this.disabled = disabled
            /**plan */
        this.nombre_plan = nombre_plan,
            this.precio = precio,
            this.descripcion=descripcion,
            this.fecha_pago_prox =fecha_pago_prox,
            this.fecha_actual = fecha_actual,
            this.idfactura = idfactura,
            this.fecha_pago = fecha_pago,
            this.fecha_pago2 = fecha_pago2,
            this.idusuario= idusuario
            

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
    wifi_nombre2: string;
    wifi_clave2: string;
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
    disabled : boolean;
    /**plan */
    nombre_plan: string;
    precio: string;
    descripcion: string;
    /**factura */
    idfactura: string;
    fecha_actual: string;
    fecha_pago: string;
    fecha_pago2: string;
    fecha_pago_prox: string;
    idusuario: string;
    comparticion: string;
    m_subida_kbps: string;
  

    
}
