import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { FacturaService } from '../../services/factura.service';
import { Contrato } from '../../models/contrato';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  facturas: [];
  constructor(public facturaService: FacturaService, private toastr: ToastrService) { }
  id: string;
  pageActual: number = 1;
 
  ngOnInit(): void {
    this.getFacturas();
  }

  buscar(form?: NgForm) {
    this.id = form.value.cedula
    this.facturaService.getFactura(this.id)
      .subscribe(res => {
        this.facturaService.contratos = res as Contrato[];
      },
        err => console.log(err)  
      )
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
}
