import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { Contrato } from '../../models/contrato';
import { ContratoService } from '../../services/contrato.service';
import { ServicioService } from '../../services/servicio.service';
import { Servicio } from '../../models/servicio';
import { DetalleEquipoService} from '../../services/detalle-equipo.service';
import { DetalleEquipo} from '../../models/detalle-equipo';
import { InformeTecnico} from '../../models/informe-tecnico';

import { ToastrService } from 'ngx-toastr';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { InformeTecnicoService } from 'src/app/services/informe-tecnico.service';
export interface Transaction {
  item: string;
  cost: number;
}
@Component({
  selector: 'app-contrato-lista',
  templateUrl: './contrato-lista.component.html',
  styleUrls: ['./contrato-lista.component.css']
})
export class ContratoListaComponent implements OnInit {
  id: string;
  orden: string;
  contrato : Contrato;
  displayedColumns: string[] = ['equipo', 'serie', 'cantidad', 'precio', 'accion'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private activatedRoute: ActivatedRoute,public contratoService: ContratoService , public servicioService: ServicioService, public  detalleEquipoService:  DetalleEquipoService, public    informeTecnicoService: InformeTecnicoService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.contratoService.getContrato_Detalle(this.id)
        .subscribe(
          res => {
            this.contrato= res ;  
            this.orden =this.contrato.idorden_instalacion;
            this.getDetalleEquipos(); 
            
          },
    
        )
    });
  this.getServicios();
  
  }

    getServicios() {
    this.servicioService.getServicios().subscribe(res => {
        this.servicioService.servicios = res as Servicio[];
         
    });

}

    getDetalleEquipos(){
    
this.detalleEquipoService.getDetalleEquipo(this.contrato.idorden_instalacion)
.subscribe(res => {
  console.log(res)
  this.detalleEquipoService.detallequipos = res as DetalleEquipo[];
  this.dataSource = new MatTableDataSource(this.detalleEquipoService.detallequipos);
})
    }

    getTotalCost() {
      return this.detalleEquipoService.detallequipos.map(t => t.total_equipo).reduce((acc, value) => acc + value, 0);
    }
    
    deleteEquipo(id){
      if (confirm('Seguro que deseas eliminar el equipo ?')) {
        this.detalleEquipoService.deleteDetalleEquipo(id)
        .subscribe(res =>{
          console.log(res)
          this.toastr.success('Eliminado con éxito!', 'Equipo ISP')
          this.getDetalleEquipos();
        })
      }
      }
      selectDetalleEquipo(detalle: DetalleEquipo){  
        this.detalleEquipoService.selectedDetalleEquipo= detalle;
      }

      addConfiguracion(form?: NgForm){
console.log( form.value)
this.informeTecnicoService.putInforme(form.value)
.subscribe(res =>{
  console.log(res)
  this.toastr.success('Guardado con éxito!', 'Configuracion');
  this.getDetalleEquipos();
})

      }

}
