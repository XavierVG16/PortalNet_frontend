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
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent implements OnInit {
  id: string;
  cliente: Cliente;
  constructor(private activatedRoute: ActivatedRoute, public clienteService: ClienteService,
    public equipoService: EquipoService, public servicioService: ServicioService,
    public contratoService: ContratoService,
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

            this.cliente = res[0];
            console.log(this.cliente[0])
          },
          err => console.log(err)
        )
    });

    this.getContrato();
  }

  editCliente(cedula: HTMLInputElement, nombre: HTMLInputElement, direccion: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement, propiedad: HTMLInputElement, apellido: HTMLInputElement, referencia: HTMLInputElement): boolean {
    //nombre, 
    console.log(direccion.value)
    this.clienteService.putCliente(this.cliente.idcliente, cedula.value, nombre.value, apellido.value, direccion.value, propiedad.value, referencia.value, email.value, telefono.value)
      .subscribe(res => {
        console.log(res)
      })

    return false;

  }

  getContrato() {
    this.contratoService.getContrato(this.id)
      .subscribe(res => {
        this.contratoService.contratos = res as Contrato[];
        console.log(this.contratoService)
      })
  }

}
