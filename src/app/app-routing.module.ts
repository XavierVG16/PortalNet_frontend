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
import {PerfilComponent} from './components/perfil/perfil.component';
import { Cliente } from './models/cliente';
import { AuthGuard} from './auth.guard'
const routes: Routes = [

  {
    path: 'inicio',
    component: EscritorioComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'proveedores',
    component: ProveedorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'servicios',
    component: ServicioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'equipos',
    component: EquipoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'productos',
    component: ProductoComponent
  },
  {
    path: 'usuarios',
    component: UsuarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contratos',
    component: ContratoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'factura',
    component: FacturaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contratos_lista',
    component: ContratoListaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'abonados',
    component: ClienteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detalle/:id',
    component: DetalleClienteComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'perfil/:id',
    component: PerfilComponent,
    canActivate: [AuthGuard]
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
