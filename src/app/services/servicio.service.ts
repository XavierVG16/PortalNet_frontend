import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/servicio';
import {environment} from './../../environments/environment'
@Injectable({ providedIn: 'root' })
export class ServicioService {
    selectedServicio: Servicio;
    servicios: Servicio[];
    readonly URL_API = `${environment.apiUrl}/servicio/`;

    constructor(private http: HttpClient) {
        this.selectedServicio = new Servicio();
    }

    getServicios() {
        return this.http.get<Servicio[]>(this.URL_API);
    }

    postServicio(servicio: Servicio) {
        return this.http.post(this.URL_API, servicio);
    }

    putServicio(servicio: Servicio) {
        return this.http.put(this.URL_API + `/${servicio.idplan_servicio
            }`, servicio);
    }

    deleteServicio(idplan_servicio: string) {
        return this.http.delete(this.URL_API + `/${idplan_servicio}`);
    }
}
