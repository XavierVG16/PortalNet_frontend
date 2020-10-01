import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrato } from '../models/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  selectedContrato: Contrato;
  contratos: Contrato[];
  readonly URL_API = 'http://localhost:3000/contrato/';


  constructor(private http: HttpClient) {
    this.selectedContrato = new Contrato();
  }
  getContratos() {
    return this.http.get(this.URL_API);
  }
  getContrato(id: string) {
    return this.http.get(this.URL_API+`/${id}`);
  }
  postContrato(contrato: Contrato, orden_instalacion) {
    // return this.http.post(this.URL_API, contrato, orden_instalacion);
    return this.http.post(this.URL_API + `/${orden_instalacion}`, contrato);
  }
  postDetalle(equiposISp: string[], orden_instalacion) {
    return this.http.post('http://localhost:3000/contrato/detalle/equipos' + `/${orden_instalacion}`, equiposISp);
  }
}
