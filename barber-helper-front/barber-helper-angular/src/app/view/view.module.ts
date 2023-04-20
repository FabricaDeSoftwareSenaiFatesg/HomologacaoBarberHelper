import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaModule } from './pessoa/pessoa.module';
import { ReservaModule } from './reserva/reserva.module';
import { ServicoModule } from './servico/servico.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PessoaModule,
    ReservaModule,
    ServicoModule,
    HomeModule
  ]
})
export class ViewModule { }
