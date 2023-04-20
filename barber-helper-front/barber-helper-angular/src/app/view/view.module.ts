import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaModule } from './pessoa/pessoa.module';
import { ReservaModule } from './reserva/reserva.module';
import { HomeModule } from './home/home.module';
import { ServicoModule } from './servico/servico.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PessoaModule,
    ReservaModule,
    HomeModule,
    ServicoModule
  ]
})
export class ViewModule { }
