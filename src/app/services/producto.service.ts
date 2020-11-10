import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import {environment} from './../../environments/environment'
@Injectable({ providedIn: 'root' })
export class ProductoService {

    selectedProducto: Producto;
    productos: Producto[];
    readonly URL_API = `${environment.apiUrl}/producto`;

    constructor(private http: HttpClient) {
        this.selectedProducto = new Producto();

    }
    getProductos() {
        return this.http.get(this.URL_API);
    }

    postProducto(producto: Producto) {
        return this.http.post(this.URL_API, producto);
    }

    putProducto(producto: Producto) {
        return this.http.put(this.URL_API + `/${producto.idproducto
            }`, producto);
    }

    deleteProducto(idproducto: string) {
        return this.http.delete(this.URL_API + `/${idproducto}`);
    }
}
