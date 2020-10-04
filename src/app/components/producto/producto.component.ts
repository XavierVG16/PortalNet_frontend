import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ProductoService} from '../../services/producto.service';
import { Producto } from 'src/app/models/producto';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  displayedColumns: string[] = ['producto', 'descripcion', 'precio','cantidad', 'estado', 'accion'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public productoService: ProductoService, private toastr: ToastrService) { }
  pageActual: number = 1;
  ngOnInit(): void {
    this.resetForm();
    this.getProductos();
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.productoService.selectedProducto = new Producto();
    }
  }

  getProductos() {
    this.productoService.getProductos()
      .subscribe(res => {
        this.productoService.productos = res as Producto[];
        this.dataSource = new MatTableDataSource(this.productoService.productos);
        this.dataSource.paginator = this.paginator;
      });
  }

  addProducto(form?: NgForm) {
    if (form.valid) {
      console.log(form.value);

      if (form.value.idproducto) {
        this.productoService.putProducto(form.value)
          .subscribe(res => {
            this.resetForm(form);
            this.getProductos();
            this.toastr.success('Actualizado con éxito!', 'Producto Cyber');

          });
      } else {
        this.productoService.postProducto(form.value)
          .subscribe(res => {
            this.getProductos();
            this.resetForm(form);
            this.toastr.success('Guardado con éxito!', 'Producto Cyber', {
              timeOut: 2000
            });
            //M.toast({html: 'Save successfully'});
          });
      }

    } else {
      this.toastr.error('Complete los campos', 'Por favor!', { timeOut: 2000 });
    }




  }

  editProducto(producto: Producto) {
    this.productoService.selectedProducto = producto;
  }

  deleteProducto(_id: string, form: NgForm) {
    if (confirm('Seguro que deseas eliminar el producto Cyber?')) {
      this.productoService.deleteProducto(_id)
        .subscribe(res => {
          this.getProductos();
          this.resetForm(form);
          this.toastr.success('Eliminado con éxito!', 'Producto Cyber', { timeOut: 2000 });
          //M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

}

