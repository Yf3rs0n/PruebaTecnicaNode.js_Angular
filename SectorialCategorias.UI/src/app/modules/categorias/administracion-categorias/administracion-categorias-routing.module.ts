import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionCategoriasComponent } from './administracion-categorias.component';

const routes: Routes = [{ path: '', component: AdministracionCategoriasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionCategoriasRoutingModule { }
