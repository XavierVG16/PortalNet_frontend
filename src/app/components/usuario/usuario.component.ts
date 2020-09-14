import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, private toastr: ToastrService) { }
  pageActual: number = 1;
  ms = 'Usuario'
  ngOnInit(): void {
    this.resetForm();
    this.getUsuarios();
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
    }
  }

  getUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(res => {
        this.usuarioService.usuarios = res as Usuario[];
      });
  }
  addUsuario(form?: NgForm) {
  
    if (form.valid) {
    

      if (form.value.idusuario) {
        this.usuarioService.putUsuario(form.value)
          .subscribe(res => {
            this.resetForm(form);
            this.getUsuarios();
            this.toastr.success('Actualizado con éxito!', `${this.ms}`, {
              timeOut: 2000
            });

          });
      } else {
        this.usuarioService.postUsuario(form.value)
          .subscribe(res => {
            this.getUsuarios();
            this.resetForm(form);
            this.toastr.success('Guardado con éxito!', `${this.ms}`, {
              timeOut: 2000
            });
            //M.toast({html: 'Save successfully'});
          });
      }

    } else {
      this.toastr.error('Complete los campos', 'Por favor!', { timeOut: 2000 });
    }

  }
  editUsuario(usuario: Usuario) {
    this.usuarioService.selectedUsuario = usuario;
  }
  deleteUsuario(_id: string, form: NgForm) {
    if (confirm('Seguro que deseas eliminar el ' + `${this.ms}` + '?')) {
      this.usuarioService.deleteUsuario(_id)
        .subscribe(res => {
          this.getUsuarios();
          this.resetForm(form);
          this.toastr.success('Eliminado con éxito!', `${this.ms}`, { timeOut: 2000 });
          //M.toast({html: 'Deleted Succesfully'});
        });
    }
  }
}
