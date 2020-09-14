export class Usuario {

    constructor(idusuario = '',
        nombre = '',
        apellido = '',
        email = '',
        pass_usuario = '',
        t_usuario = '',
        telefono ='',
        p =''
    ) {
        this.idusuario = idusuario,
            this.nombre = nombre,
            this.apellido = apellido,
            this.email = email,
            this.pass_usuario = pass_usuario,
            this.t_usuario = t_usuario,
            this.telefono = telefono,
            this.p = p

    }
    idusuario: string;
    nombre: string;
    apellido: string;
    email: string;
    pass_usuario: string;
    t_usuario: string;
    telefono: string;
    p: string
}
