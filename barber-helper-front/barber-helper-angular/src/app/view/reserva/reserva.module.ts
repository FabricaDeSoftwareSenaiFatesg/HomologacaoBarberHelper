import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquiteturaModule } from 'src/app/arquitetura/arquitetura.module';
import { ReservaComponent } from './reserva.component';
import {MultiSelectModule} from "primeng/multiselect";

@NgModule({
  declarations: [
    ReservaComponent
  ],
    imports: [
        CommonModule,
        ArquiteturaModule,
        MultiSelectModule
    ],
  exports: [
    ReservaComponent
  ]
})
export class ReservaModule { }
