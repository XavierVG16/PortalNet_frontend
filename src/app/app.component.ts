import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from './services/usuario.service';
import {AuthService} from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortalNet';
  constructor(public usuarioService: UsuarioService, public authService: AuthService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  getUsuario(form?: NgForm) {
 // console.log(form.value)
  this.authService.postUsuario(form.value)
  .subscribe(
    res=>{
    
    console.log(res);

      localStorage.setItem('token', res.token);
      this.router.navigate(['/inicio']);

      this.toastr.success(`ss`, 'Bienvenido!');


    },
    err =>{
   
      console.log(err.error.message)
      this.toastr.error(`${(err.error.message)}`, 'Error!');

    }

  )
  }

}
