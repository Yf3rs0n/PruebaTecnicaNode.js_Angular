import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'administracion-categorias',
    pathMatch: 'full',
  },
  {
    path: 'administracion-categorias',
    loadChildren: () =>
      import(
        '../categorias/administracion-categorias/administracion-categorias.module'
      ).then((m) => m.AdministracionCategoriasModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
