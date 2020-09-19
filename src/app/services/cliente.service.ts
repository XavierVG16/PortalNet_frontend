import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  selectedCliente: Cliente;
  clientes: Cliente[];
  readonly URL_API = 'http://localhost:3000/cliente/';

  constructor(private http: HttpClient) {
    this.selectedCliente = new Cliente();
  }
  getClientes() {
    return this.http.get(this.URL_API);
  }
  getCliente(idcliente: string) {
    return this.http.get(this.URL_API + `/${idcliente}`);
  }
  postCliente(cliente: Cliente) {
    return this.http.post(this.URL_API, cliente);
  }
  putCliente(cliente: Cliente) {
    return this.http.put(this.URL_API + `/${cliente.idcliente}`, cliente);
  }
  deleteCliente(idcliente: string) {
    return this.http.delete(this.URL_API + `/${idcliente}`);
  }
}
