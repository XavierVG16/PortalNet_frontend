export class Cliente {
    constructor(idcliente = '',cedula ='', nombre = '', apellido = '', direccion = '', propiedad = '', referencia = '', estado = '', descripcion_estado = '', telefono = '', email ='') {
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

    }
    insertId: string;
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
    email: string
}
