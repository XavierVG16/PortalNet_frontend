import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Form ,FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServicioService } from '../../services/servicio.service';
import { Servicio } from '../../models/servicio';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  firstFormGroup: FormGroup;
  displayedColumns: string[] = ['nombre', 'apellido', 'cedula', 'direccion', 'telefono', 'estado', 'accion'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public clienteService: ClienteService, public servicioService: ServicioService,private router: Router, private toastr: ToastrService) {
    this.getCliente();

  }



  ngOnInit(): void {
 this.getCliente();
 this.getServicios();

  }

  
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.clienteService.selectedCliente = new Cliente();
    }
  }
getCliente(){
  this.clienteService.getClientes()
  .subscribe(res => {
    this.clientes = res
    console.log(this.clientes)
    this.dataSource = new MatTableDataSource(this.clientes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  })
}
getServicios() {
  this.servicioService.getServicios().subscribe(res => {
      this.servicioService.servicios = res as Servicio[];
  });
}
  selectedCliente(id: string) {
    console.log(id)
    this.router.navigate(['/detalle', id]);
  }
  addCliente(form?: NgForm){
 console.log(form.value)
    this.clienteService.postCliente(form.value)
    .subscribe( data =>{
      this.resetForm();
      this.getCliente()
      this.toastr.success('Guardado con éxito!', 'Cliente');
      this.router.navigate(['/detalle',data]);     
    }, err =>{
      this.toastr.warning('El cliente esta registrado!','Cliente')
      this.resetForm();
      this.router.navigate(['/detalle', err.error.cliente.idcliente]);     
      this.getCliente()
    });
  }
 
  deleteCliente(id){
    if (confirm('Seguro que deseas eliminar el cliente ?')) {
      this.clienteService.deleteCliente(id)
      .subscribe(res =>{
        console.log(res)
        this.toastr.success('Eliminado con éxito!', 'Cliente')
        this.getCliente();
      })
    }
    }
  

}
