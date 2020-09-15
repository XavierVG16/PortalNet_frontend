import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  constructor(public clienteService: ClienteService, private toastr: ToastrService ) { }
  pageActual: number = 1;
  ms = 'Cliente'
  ngOnInit(): void {
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.clienteService.selectedCliente = new Cliente();
    }
  }
  addCliente(form?: NgForm) {

    if (form.valid) {

console.log(form.value)
     
        this.clienteService.postCliente(form.value)
          .subscribe(res => {
           
            this.resetForm(form);
            this.toastr.success('Guardado con éxito!', `${this.ms}`, {
              timeOut: 2000
            });
            //M.toast({html: 'Save successfully'});
          });
      

    } else {
      this.toastr.error('Complete los campos', 'Por favor!', { timeOut: 2000 });
    }

  }
}
