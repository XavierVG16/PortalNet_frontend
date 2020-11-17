import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InformeTecnico } from '../models/informe-tecnico';
import {environment} from './../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class InformeTecnicoService {
  selectedInformeTecnico: InformeTecnico;
  InformeTecnicos: InformeTecnico[];
  readonly URL_API = `${environment.apiUrl}/informe_tecnico/`;
  constructor(private http: HttpClient) { 
    this.selectedInformeTecnico = new InformeTecnico();
    
  }
  getInformes(){
    return this.http.get(this.URL_API);
  }
  postInforme(informe: InformeTecnico) {
    return this.http.post(this.URL_API, informe);
  }
  putInforme ( informe: InformeTecnico){
    return this.http.put(this.URL_API + `/${informe.idinfo_tec}`,{informe})
  }
  deleteInforma(id: string) {
    return this.http.delete(this.URL_API + `/${id}`)
  }
}
