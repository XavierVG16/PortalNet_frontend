import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from 'src/app/models/proveedor';
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  displayedColumns: string[] = ['proveedor', 'vendedor', 'telefono', 'banco','cuenta', 'numero_c','cedula','beneficiario', 'accion'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public proveedorService: ProveedorService, private toastr: ToastrService) { }


  pageActual: number = 1;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getProveedores();
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.proveedorService.selectedProveedor = new Proveedor();
    }
  }
  getProveedores() {
    this.proveedorService.getProveedores()
      .subscribe(res => {
        this.proveedorService.proveedores = res as Proveedor[];
        this.dataSource = new MatTableDataSource(this.proveedorService.proveedores);
        this.dataSource.paginator = this.paginator;
      });
  }
  addProveedor(form?: NgForm) {
    if (form.valid) {
      console.log(form.value);

      if (form.value.id_proveedor) {
        this.proveedorService.putProveedor(form.value)
          .subscribe(res => {
            this.resetForm(form);
            this.getProveedores();
            this.toastr.success('Actualizado con éxito!', 'Proveedor', {
              timeOut: 2000
            });

          });
      } else {
        this.proveedorService.postProveedor(form.value)
          .subscribe(res => {
            this.getProveedores();
            this.resetForm(form);
            this.toastr.success('Guardado con éxito!', 'Proveedor', {
              timeOut: 2000
            });
            //M.toast({html: 'Save successfully'});
          });
      }

    } else {
      this.toastr.error('Complete los campos', 'Por favor!', { timeOut: 2000 });
    }




  }

  editProveedor(proveedor: Proveedor) {
    this.proveedorService.selectedProveedor = proveedor;
  }

  deleteCategory(_id: string, form: NgForm) {
    if (confirm('Seguro que deseas eliminar el proveedor ?')) {
      this.proveedorService.deleteProveedor(_id)
        .subscribe(res => {
          this.getProveedores();
          this.resetForm(form);
          this.toastr.success('Eliminado con éxito!', 'Proveedor', { timeOut: 2000 });
          //M.toast({html: 'Deleted Succesfully'});
        });
    }
  }
}
