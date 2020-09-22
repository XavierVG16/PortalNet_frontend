import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContratoService } from '../../services/contrato.service';
import {Contrato} from '../../models/contrato';
import {EquipoService} from '../../services/equipo.service';
import { Equipo } from 'src/app/models/equipo';
import { ServicioService } from '../../services/servicio.service';
import { Servicio } from '../../models/servicio';
import { from } from 'rxjs';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  equiposISp= [];
 
  constructor(
    public contratoService: ContratoService,
     public equipoService: EquipoService,
    public servicioService: ServicioService
    ,private toastr: ToastrService ) { 
 
    }
  pageActual: number = 1;
  total: number = 1;
  ms = 'Cliente'

  
  ngOnInit(): void {
    this.getEquipos();
    this.getServicios();
 

  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.contratoService.selectedContrato = new Contrato();
      this.equiposISp =[ {
        "equipo":"",
        "equipo_n":"",
        "descripcion":"",
        "serie":"",
        "cantidad":"",
        "precio":""
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

    this.contratoService.postContrato(form.value)
 
   .subscribe(res =>{
     this.getServicios();
     this.resetForm(form);
     this.toastr.success('Guardado con éxito!', 'Plan de Internet', {
       timeOut: 2000
     });
   })
  

    this.contratoService.postDetalle(this.equiposISp)
      .subscribe(res => {
        this.getServicios();
        this.resetForm(form);
        this.toastr.success('Guardado con éxito!', 'Detalle de Equipos ISP ', {
          timeOut: 2000
        });
      })


}
addEquipo(){

}
  selectEquipo(equipo: Equipo) {
 
    this.equipoService.selectedEquipo = equipo;
   this.equiposISp.push(
     {
       equipo: equipo.idequipo,
       equipo_n: equipo.equipo,
       descripcion: equipo.descripcion,
       serie: equipo.serie,
       cantidad: equipo.cantidad,
       precio: equipo.precio
     }
     
   );

  //  this.total = this.total + equipo.precio;

   


  //  console.log(this.total);

  }
}