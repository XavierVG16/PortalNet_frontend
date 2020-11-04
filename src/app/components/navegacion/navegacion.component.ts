import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {UsuarioService} from '../../services/usuario.service'
import {Usuario} from './../../models/usuario';
import { first } from 'rxjs/operators';
import { HttpInterceptor } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  id: string;
  usuario: Usuario;

  constructor(public authService: AuthService, public usuarioService : UsuarioService, private router: Router) { 

  }
  

  ngOnInit(): void {
    
    console.log( this.authService.getToken())
    this.getUsuario()
  }
  getUsuario(){
    this.id = this.authService.getToken()
    this.authService.getUser(this.id)
    .subscribe(res => {
      this.usuario = res[0]

      console.log(this.usuario)
    })
  }
  selectedUsuario(id: number) {
    console.log(id)
    this.router.navigate(['/perfil', id]);
  }
  salir(){
    this.authService.logout()
  }



}
