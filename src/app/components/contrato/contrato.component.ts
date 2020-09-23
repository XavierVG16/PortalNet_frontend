import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/contrato';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from 'src/app/models/equipo';
import { ServicioService } from '../../services/servicio.service';
import { Servicio } from '../../models/servicio';
import { from } from 'rxjs';
/**material  */
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


/**materia tabal */
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  equiposISp = [];
  orden_instalacion = '000001'
  /**tabla materia */
  displayedColumns: string[] = ['equipo', 'cantidad', 'descripcion', 'estado', 'precio'];
  dataSource: MatTableDataSource<Equipo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public contratoService: ContratoService,
    public equipoService: EquipoService,
    public servicioService: ServicioService
    , private toastr: ToastrService) {

    //const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
  //  this.dataSource = new MatTableDataSource(Equipo);

  }
  checkbox: boolean = true;
  pageActual: number = 1;
  total: number = 1;

  ms = 'Cliente'
/**material tabla */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.getEquipos();
    this.getServicios();


  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.contratoService.selectedContrato = new Contrato();
      this.equiposISp = [{
        "id": "1",
        "equipo": "1",
        "equipo_n": "1",
        "descripcion": "1",
        "serie": "1",
        "cantidad": "",
        "precio": "1"
      }];

    }
  }
  getEquipos() {
    this.equipoService.getEquipos()
      .subscribe(res => {
        this.equipoService.equipos = res as Equipo[];
      });
  }

  getServicios() {
    this.servicioService.getServicios()
      .subscribe(res => {
        this.servicioService.servicios = res as Servicio[];
      });
  }

  addContrato(form?: NgForm) {
    console.log(form.value);
    const orden_instalacion = '000001'
    // this.contratoService.postContrato(form.value, orden_instalacion)

    // .subscribe(res => {
    // this.getServicios();
    //this.resetForm(form);
    //this.toastr.success('Guardado con éxito!', 'Plan de Internet', {
    // timeOut: 2000
    // });
    // })

    /*
        this.contratoService.postDetalle(this.equiposISp)
          .subscribe(res => {
            this.getServicios();
            this.resetForm(form);
            this.toastr.success('Guardado con éxito!', 'Detalle de Equipos ISP ', {
              timeOut: 2000
            });
          })
        window.location.reload();
    */
  }
  addEquipo() {

  }
  selectEquipo(equipo: Equipo) {

    this.equipoService.selectedEquipo = equipo;
    this.equiposISp.push(
      {
        id : this.equiposISp.length + 1,
        equipo: equipo.idequipo,
        equipo_n: equipo.equipo,
        descripcion: equipo.descripcion,
        serie: equipo.serie,
        cantidad: equipo.cantidad,
        precio: equipo.precio,
       
      }
      

    );
    console.log(this.equiposISp)
    //  this.total = this.total + equipo.precio;




    //  console.log(this.total);

  }
  deleteCategory(_id: string) {
    if (confirm('Seguro que deseas borrar el equipo?')) {
      this.equiposISp.forEach((product, i) => {
        if (product.id == _id) {
          this.equiposISp.splice(i, 1);
        }
      });
        
         
        
          this.toastr.success('Se borro con éxito!', 'Equipo ISP', { timeOut: 2000 });
          //M.toast({html: 'Deleted Succesfully'});
       
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}