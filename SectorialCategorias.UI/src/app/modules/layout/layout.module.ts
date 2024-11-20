import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MessageService, PrimeNGConfig } from 'primeng/api';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule
  ],
  providers: [PrimeNGConfig, MessageService],

})
export class LayoutModule { }
