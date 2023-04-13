import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArquiteturaModule } from 'src/app/arquitetura/arquitetura.module';
import { ReservaComponent } from './reserva.component';

@NgModule({
  declarations: [
    ReservaComponent
  ],
  imports: [
    CommonModule,
    ArquiteturaModule
  ],
  exports: [
    ReservaComponent
  ]
})
export class ReservaModule { }
