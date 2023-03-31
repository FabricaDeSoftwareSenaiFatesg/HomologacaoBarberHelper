import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaModule } from './pessoa/pessoa.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PessoaModule
  ]
})
export class ViewModule { }
