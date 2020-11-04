import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Contrato } from '../../models/contrato';
import { ContratoService } from '../../services/contrato.service';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from 'src/app/models/equipo';
import { ServicioService } from '../../services/servicio.service';
import { Servicio } from '../../models/servicio';
import{DetalleEquipoService} from '../../services/detalle-equipo.service';
import{DetalleEquipo} from '../../models/detalle-equipo';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent implements OnInit {
  id: string;
  cliente: Cliente;
  detalleEquipo: DetalleEquipo;
  contrato: Contrato;
   array :string [];

  constructor(private activatedRoute: ActivatedRoute, public clienteService: ClienteService,
    public equipoService: EquipoService, public servicioService: ServicioService,
    public contratoService: ContratoService, public detalleEquipoService: DetalleEquipoService,
    private router: Router) { }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.clienteService.getCliente(this.id)
        .subscribe(
          res => {
            this.cliente  = res;
            console.log(res)
            this.getContrato();
            
          },
    
        )
    });

     
    this.getServicios();
 
  }

  editCliente(cedula: HTMLInputElement, nombre: HTMLInputElement, direccion: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement, propiedad: HTMLInputElement, apellido: HTMLInputElement, referencia: HTMLInputElement): boolean {
    
    this.clienteService.putCliente(this.cliente.idcliente, cedula.value, nombre.value, apellido.value, direccion.value, propiedad.value, referencia.value, email.value, telefono.value)
      .subscribe(res => {
        console.log(res)
      })

    return false;

  }

  getContrato() {
    this.contratoService.getContrato(this.cliente.idcliente)
      .subscribe(res => {
        this.contrato = res;
        console.log(this.contrato)


      })
    

      /*this.detalleEquipoService.getDetalleEquipo(res.idorden_instalacion)
      .subscribe(res=>{
        this.detalleEquipo = res;
        console.log(this.detalleEquipo)
      }) */
  }

  getServicios() {
    this.servicioService.getServicios().subscribe(res => {
        this.servicioService.servicios = res as Servicio[];
        

    });
}

}
