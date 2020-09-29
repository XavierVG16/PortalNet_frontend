import {AfterViewInit, Component, OnInit , ViewChild} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import {ServicioService} from '../../services/servicio.service';
import {Servicio} from '../../models/servicio';
/**tabla */
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { from } from 'rxjs';
@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements AfterViewInit {
  servicios: Servicio[] = [];
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.servicioService.getServicios()
      .subscribe(
        res => {
          console.log(res)

          this.dataSource = new MatTableDataSource(res);
        },
        err => console.log(err)
      )
  }
  
  constructor(public servicioService: ServicioService, private toastr: ToastrService) { 
   


     

  }
  filterPost = '';
  
 
  pageActual: number = 1;
  ngOnInit(): void {
    this.getServicios();
    this.servicioService.getServicios()
      .subscribe(
        res => {
          console.log(res)
          this.dataSource = new MatTableDataSource(res);
          this.servicios = res as Servicio[];

        },
        err => console.log(err)
      )
     
  }
  
  /**tabla */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  /** funciones */
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.servicioService.selectedServicio = new Servicio();
    }
  }

  getServicios() {
  
    this.servicioService.getServicios()
      .subscribe(res => {
        this.servicioService.servicios = res as Servicio[];
      });
  }
  addServicio(form?: NgForm) {
    if (form.valid) {
      console.log(form.value);

      if (form.value.idplan_servicio) {
        this.servicioService.putServicio(form.value)
          .subscribe(res => {
            this.resetForm(form);
            this.getServicios();
            this.toastr.success('Actualizado con éxito!', 'Plan de Internet', {
              timeOut: 2000
            });

          });
      } else {
        this.servicioService.postServicio(form.value)
          .subscribe(res => {
            this.getServicios();
            this.resetForm(form);
            this.toastr.success('Guardado con éxito!', 'Plan de Internet', {
              timeOut: 2000
            });
            //M.toast({html: 'Save successfully'});
          });
      }

    } else {
      this.toastr.error('Complete los campos', 'Por favor!', { timeOut: 2000 });
    }




  }

  editServicio( servicio: Servicio) {
    this.servicioService.selectedServicio = servicio;
  }

  deleteServicio(_id: string, form: NgForm) {
    if (confirm('Seguro que deseas eliminar el Plan de Internet?')) {
      this.servicioService.deleteServicio(_id)
        .subscribe(res => {
          this.getServicios();
          this.resetForm(form);
          this.toastr.success('Eliminado con éxito!', 'Plan de Internet', { timeOut: 2000 });
          //M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

}
