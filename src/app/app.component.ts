import { Component } from '@angular/core';
import { FacturaService } from './services/factura.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortalNet';
  constructor(public facturaService: FacturaService, private toastr: ToastrService) { }
}
