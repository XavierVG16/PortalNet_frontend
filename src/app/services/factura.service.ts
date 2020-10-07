import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contrato } from '../models/contrato';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  selectedContrato: Contrato;
  contratos: Contrato[];
  facturas: Contrato[];
  readonly URL_API = 'https://sistemaportalnet.herokuapp.com/factura/';

  constructor(private http: HttpClient) {
    this.selectedContrato = new Contrato();
  }
  getFacturas() {
    return this.http.get(this.URL_API);
  }
  getFactura(id: string) {
    return this.http.get(this.URL_API + `/${id}`);
  }

  putFactura(factura: Contrato) {
    return this.http.put(this.URL_API, factura);
  }
}
