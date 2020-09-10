export class Proveedor {
    constructor(id_proveedor = '', proveedor_nombre = '', email = '', telefono = '', direccion = '', nombre_beneficiario = '', n_cuenta = '', cedula = '', banco = '', tipo_cuenta ='', beneficiario ='', descripcio_p = '') {
         this.id_proveedor = id_proveedor,
            this.proveedor_nombre = proveedor_nombre,
            this.email = email,
            this.telefono = telefono,
            this.direccion = direccion,
            this.nombre_beneficiario = nombre_beneficiario,
            this.n_cuenta = n_cuenta,
            this.cedula = cedula,
            this.banco = banco,
            this.tipo_cuenta = tipo_cuenta,
            this.beneficiario = beneficiario,
            this.descripcion_p = descripcio_p
    }
    id_proveedor: string;
    proveedor_nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    nombre_beneficiario: string;
    n_cuenta: string;
    cedula: string;
    banco: string;
    tipo_cuenta: string;
    beneficiario: string;
    descripcion_p: string;
}
