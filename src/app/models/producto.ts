export class Producto {

    constructor(idproducto ='', producto='', precio ='', cantidad = '', descripcion = ''){
        this.idproducto = idproducto,
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad,
        this.descripcion = descripcion
    }
    idproducto: string;
    producto: string;
    precio: string;
    cantidad: string;
    descripcion: string;
}
