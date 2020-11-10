import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../models/proveedor';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class ProveedorService {

    selectedProveedor: Proveedor;
    proveedores: Proveedor[];
    readonly URL_API = `${environment.apiUrl}/proveedor/`;

    constructor(private http: HttpClient) {
        this.selectedProveedor = new Proveedor();
    }
    getProveedores() {
        return this.http.get(this.URL_API);
    }

    postProveedor(proveedor: Proveedor) {
        return this.http.post(this.URL_API, proveedor);
    }

    putProveedor(proveedor: Proveedor) {
        return this.http.put(this.URL_API + `/${proveedor.id_proveedor
            }`, proveedor);
    }

    deleteProveedor(id_proveedor: string) {
        return this.http.delete(this.URL_API + `/${id_proveedor}`);
    }

}
