import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AgregarComponent,],

  imports: [
    CommonModule,
    FormsModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductosModule { }
