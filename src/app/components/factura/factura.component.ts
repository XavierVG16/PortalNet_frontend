import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { FacturaService } from '../../services/factura.service';
import { Contrato } from '../../models/contrato';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  facturas: [];

  displayedColumns: string[] = ['nombre', 'apellido', 'cedula','direccion', 'telefono','estado', 'accion'];
  displayedColumns2: string[] = ['nombre', 'apellido', 'cedula', 'direccion', 'telefono', 'fecha_pago','dia_pago' ,'estado'];

  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public facturaService: FacturaService, private toastr: ToastrService) {
    this.facturaService.getFacturas()
    .subscribe(res=>{
      this.facturaService.facturas = res as Contrato[];
      this.dataSource = new MatTableDataSource(this.facturaService.facturas);

      this.dataSource.paginator = this.paginator;
    })
   }
 

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
 
  ngOnInit(): void {
    this.getFacturas();
  }



  getFacturas(){
    this.facturaService.getFacturas()
      .subscribe(res => {
      
        this.facturaService.facturas = res as Contrato[];

       console.log(this.facturas)
      },
      err => console.log(err)
      );
  }
  editFactura(contrato: Contrato ) {
    this.facturaService.selectedContrato = contrato;
  }
  addFactura(form: NgForm){
    if(form.valid){
      console.log(form.value)
      this.facturaService.putFactura(form.value)
      .subscribe(res =>{
        this.toastr.success('Pago con éxito!', 'Factura');
      }
        )
     
    }
    else {
      this.toastr.error('Complete los campos', 'Por favor!');

    }
    
  }
}
