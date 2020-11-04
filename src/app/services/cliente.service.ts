import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  selectedCliente: Cliente;
  clientes: Cliente[];
  readonly URL_API = 'https://sistemaportalnet.herokuapp.com/cliente/';

  constructor(private http: HttpClient) {
    this.selectedCliente = new Cliente();
  }
  getClientes() {
    return this.http.get<Cliente[]>(this.URL_API);
  }
  getCliente(idcliente: string) {
    return this.http.get<Cliente>(this.URL_API + `/${idcliente}`);
  }



  postCliente(cliente: Cliente) {
    return this.http.post(this.URL_API, cliente);
  }
  putEstado ( id: string,estado : string ){
    return this.http.put(this.URL_API + `/estado/${id}`,{estado})
  }
  putCliente(id: string, cedula: string, nombre: string, apellido: string, direccion: string, propiedad: string, referencia: string, email: string, telefono: string) {
    return this.http.put(this.URL_API + `/${id}`, { cedula, nombre, apellido, direccion, propiedad, referencia, email, telefono })
  }
  deleteCliente(idcliente: string) {
    return this.http.delete(this.URL_API + `/${idcliente}`)
  }
}