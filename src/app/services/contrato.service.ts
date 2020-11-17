import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrato } from '../models/contrato';
import {environment} from './../../environments/environment'
@Injectable({ providedIn: 'root' })
export class ContratoService {
    selectedContrato: Contrato;
    contratos: Contrato[];
    readonly URL_API = `${environment.apiUrl}/contrato`;


    constructor(private http: HttpClient) {
        this.selectedContrato = new Contrato();
    }
    getContratos() {
        return this.http.get(this.URL_API);
    }
    getContrato(id: string) {
        return this.http.get(this.URL_API + `/${id}`);
    }
    getContrato_Detalle(id: string) {
        return this.http.get<Contrato>(this.URL_API + `/detalle/${id}`);
    }
    postContrato(contrato: Contrato, orden_instalacion) { // return this.http.post(this.URL_API, contrato, orden_instalacion);
        return this.http.post(this.URL_API + `/${orden_instalacion}`, contrato);
    }
    postDetalle(equiposISp: string[], orden_instalacion) {
        return this.http.post(this.URL_API+'/detalle/equipos' + `/${orden_instalacion}`, equiposISp);
    }
}
