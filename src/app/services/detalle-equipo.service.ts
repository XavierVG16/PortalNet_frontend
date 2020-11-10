import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DetalleEquipo} from '../models/detalle-equipo';
import {environment} from './../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class DetalleEquipoService {
  selectedDetalleEquipo: DetalleEquipo;
  detalleEquipos: DetalleEquipo[];

  readonly URL_API = `${environment.apiUrl}/detalle/`;
  constructor(private http: HttpClient) {
    this.selectedDetalleEquipo = new DetalleEquipo();
   }

   getDetalleEquipos(){
     return this.http.get(this.URL_API);
   }
   getDetalleEquipo(id: string){
     return this.http.get<DetalleEquipo>(this.URL_API+`/${id}`)
   }
}
