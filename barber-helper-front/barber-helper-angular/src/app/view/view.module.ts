import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaModule } from './pessoa/pessoa.module';
import { ReservaModule } from './reserva/reserva.module';
import { ServicoModule } from './servico/servico.module';
import { HomeModule } from './home/home.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';
import { LojaModule } from './loja/loja.module';
import { MenuModule } from './menu/menu.module';
import { SobreComponent } from './sobre/sobre.component';
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [

    SobreComponent
  ],
    imports: [
        CommonModule,
        ButtonModule
    ],
  exports: [
    PessoaModule,
    ReservaModule,
    ServicoModule,
    HomeModule,
    UsuarioModule,
    ProdutoModule,
    LojaModule,
    MenuModule
  ]
})
export class ViewModule { }
