import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
/***materlia amgular */
import { DemoMaterialModule } from './material-module';



import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { EscritorioComponent } from './components/escritorio/escritorio.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ErrorComponent } from './components/error/error.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ProductoComponent } from './components/producto/producto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ContratoListaComponent } from './components/contrato-lista/contrato-lista.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { OrdenInstalacionComponent } from './components/orden-instalacion/orden-instalacion.component';
import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    EscritorioComponent,
    ProveedorComponent,
    ServicioComponent,
    ErrorComponent,
    EquipoComponent,
    ProductoComponent,
    UsuarioComponent,
    ContratoComponent,
    FacturaComponent,
    ContratoListaComponent,
    ClienteComponent,
    OrdenInstalacionComponent,
    DetalleClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    DemoMaterialModule,


    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
