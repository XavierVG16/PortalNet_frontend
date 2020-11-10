import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
//import { Observable } from "rxjs/Observable";
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {environment} from './../../environments/environment'
import { Observable, throwError, BehaviorSubject } from 'rxjs';

const USER_KEY = 'token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  selectedUsuario: Usuario;
  usuario: Usuario[];

  readonly URL_API = `${environment.apiUrl}/signin/`;


  constructor(private http: HttpClient, private router: Router) {
    this.selectedUsuario = new Usuario();
   }
   postUsuario(usuario: Usuario) {
    return this.http.post<any>(this.URL_API, usuario)
  
}


loggedIn() {
  return !!localStorage.getItem('token');
}

logout() {
  localStorage.removeItem('token');
  this.router.navigate(['/']);
}

getToken() {
  return localStorage.getItem('token');
}
getUser(id: string){
  return this.http.get<Usuario>(this.URL_API+`/user/${id}`)
}

setToken(token): void {
  localStorage.setItem("accessToken", token);
}




}
