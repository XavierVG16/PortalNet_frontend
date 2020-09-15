import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscritorioComponent } from './components/escritorio/escritorio.component';
import { ProveedorComponent} from './components/proveedor/proveedor.component';
import { ServicioComponent} from './components/servicio/servicio.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ProductoComponent } from './components/producto/producto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ContratoComponent} from './components/contrato/contrato.component';

import { ErrorComponent } from './components/error/error.component';
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
    path: '**',
    component: ErrorComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
