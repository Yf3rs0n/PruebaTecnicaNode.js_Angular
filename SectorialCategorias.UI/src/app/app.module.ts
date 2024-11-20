import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { TablaGestionCategoriasComponent } from './modules/categorias/components/tabla-gestion-categorias/tabla-gestion-categorias.component';
import { MessageService } from 'primeng/api';
import { ModalCategoriasComponent } from './modules/categorias/components/modal-categorias/modal-categorias.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
