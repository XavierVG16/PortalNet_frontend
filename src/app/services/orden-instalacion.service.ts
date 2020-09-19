import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenInstalacion } from '../models/orden-instalacion';

@Injectable({
  providedIn: 'root'
})

export class OrdenInstalacionService {
  selectedOrdeninstalacion: OrdenInstalacion;
  Ordeninstalaciones: OrdenInstalacion[];
  readonly URL_API = 'http://localhost:3000/orden/';

  constructor(private http: HttpClient) {
    this.selectedOrdeninstalacion = new OrdenInstalacion();
   }
  getOrden_instalaciones() {
    return this.http.get(this.URL_API);
  }

  postOrden_instalacion(ordeninstalacion: OrdenInstalacion) {
    return this.http.post(this.URL_API, ordeninstalacion);
  }

  putOrden_instalacion(ordeninstalacion: OrdenInstalacion) {
    return this.http.put(this.URL_API + `/${ordeninstalacion.idorden_instalacion}`, ordeninstalacion);
  }

  deleteOrden_instalacion(idorden_instalacion: string) {
    return this.http.delete(this.URL_API + `/${idorden_instalacion}`);
}
}