import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuario.service';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'email','telefono', 't_usuario', 'accion'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public usuarioService: UsuarioService, private toastr: ToastrService) { }
  pageActual: number = 1;
  ms = 'Usuario'
  photoSelected: string | ArrayBuffer;
  file: File;
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
  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  getUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(res => {
        this.usuarioService.usuarios = res as Usuario[];
        this.dataSource = new MatTableDataSource(this.usuarioService.usuarios);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
            this.toastr.success('Guardado con éxito!', `${this.ms}`);
            //M.toast({html: 'Save successfully'});
          }, err =>{
              this.toastr.error('Error !', `${err.error.message}`);

            
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
