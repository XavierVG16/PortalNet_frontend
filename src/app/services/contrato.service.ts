import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrato } from '../models/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  selectedContrato: Contrato;
  contratos : Contrato[];
  readonly URL_API = 'https://sistemaportalnet.herokuapp.com/contrato/';


  constructor(private http: HttpClient) { 
    this.selectedContrato = new Contrato();
  }

  postContrato( contrato: Contrato) {
    return this.http.post(this.URL_API, contrato);
  }

  postDetalle(equiposISp: string []) {
    return this.http.post(this.URL_API + '/detalle', equiposISp);
  }
}
