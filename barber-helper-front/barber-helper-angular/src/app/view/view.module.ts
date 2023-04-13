import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaModule } from './pessoa/pessoa.module';
import { ReservaModule } from './reserva/reserva.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PessoaModule,
    ReservaModule
  ]
})
export class ViewModule { }
