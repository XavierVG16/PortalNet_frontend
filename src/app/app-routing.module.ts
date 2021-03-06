import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscritorioComponent } from './components/escritorio/escritorio.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ProductoComponent } from './components/producto/producto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ContratoListaComponent } from './components/contrato-lista/contrato-lista.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';
import { ErrorComponent } from './components/error/error.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { Cliente } from './models/cliente';
import { AuthGuard } from './auth.guard'
const routes: Routes = [

  {
    path: 'inicio',
    component: EscritorioComponent
  },

  {
    path: 'proveedores',
    component: ProveedorComponent
  },
  {
    path: 'servicios',
    component: ServicioComponent
  },
  {
    path: 'equipos',
    component: EquipoComponent
  },
  {
    path: 'productos',
    component: ProductoComponent
  },
  {
    path: 'usuarios',
    component: UsuarioComponent
  },
  {
    path: 'contratos',
    component: ContratoComponent
  },
  {
    path: 'factura',
    component: FacturaComponent
  },
  {
    path: 'contrato_detalle/:id',
    component: ContratoListaComponent
  },
  {
    path: 'abonados',
    component: ClienteComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleClienteComponent

  },
  {
    path: 'perfil/:id',
    component: PerfilComponent

  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
