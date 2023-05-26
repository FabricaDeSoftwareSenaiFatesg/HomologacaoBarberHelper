import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { PessoaRoutes } from './view/pessoa/pessoa-routes';
import { UsuarioRoutes } from './view/usuario/usuario-routes';
import { ProdutoComponent } from './view/produto/produto.component';
import { LojaComponent } from './view/loja/loja.component';
import {ReservaRoutes} from "./view/reserva/reserva-routes";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pessoa', children: PessoaRoutes },
  { path: 'reserva', children: ReservaRoutes },
  { path: 'usuario', children: UsuarioRoutes },
  { path: 'produto', component: ProdutoComponent },
  { path: 'loja', component: LojaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
