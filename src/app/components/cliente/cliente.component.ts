import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';


import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'cedula', 'direccion', 'telefono', 'estado', 'accion'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public clienteService: ClienteService, private router: Router) {
    this.clienteService.getClientes()
      .subscribe(res => {
        this.clientes = res
        console.log(this.clientes)
        this.dataSource = new MatTableDataSource(this.clientes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      })

  }



  ngOnInit(): void {


  }

  selectedCliente(id: string) {
    console.log(id)
    this.router.navigate(['/detalle', id]);
  }

}
