import {Injectable} from '@angular/core';
import {Usuario} from '../models/usuario';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UsuarioService {

    selectedUsuario : Usuario;
    usuarios : Usuario[];
    readonly URL_API = 'https://sistemaportalnet.herokuapp.com/usuario/';
    constructor(private http : HttpClient) {
        this.selectedUsuario = new Usuario();
    }
    getUsuarios() {
        return this.http.get(this.URL_API);
    }
    postUsuario(usuario : Usuario) {
        return this.http.post(this.URL_API, usuario);
    }
    putUsuario(usuario : Usuario) {
        return this.http.put(this.URL_API + `/${
            usuario.idusuario
        }`, usuario);
    }
    deleteUsuario(idusuario : string) {
        return this.http.delete(this.URL_API + `/${idusuario}`);
    }
}
