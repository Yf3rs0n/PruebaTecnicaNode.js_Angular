import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionCategoriasRoutingModule } from './administracion-categorias-routing.module';
import { AdministracionCategoriasComponent } from './administracion-categorias.component';
import { TablaGestionCategoriasComponent } from '../components/tabla-gestion-categorias/tabla-gestion-categorias.component';
import { ModalCategoriasComponent } from '../components/modal-categorias/modal-categorias.component';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    AdministracionCategoriasComponent,
    TablaGestionCategoriasComponent,
    ModalCategoriasComponent
  ],
  imports: [
    CommonModule,
    AdministracionCategoriasRoutingModule,
    TableModule,
    TooltipModule,
    ToastModule,
    MenuModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    DropdownModule,
    InputTextModule 
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdministracionCategoriasModule { }
