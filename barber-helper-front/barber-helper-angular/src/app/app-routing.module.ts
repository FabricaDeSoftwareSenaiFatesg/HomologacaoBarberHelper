import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { ReservaComponent } from './view/reserva/reserva.component';
import { PessoaRoutes } from './view/pessoa/pessoa-routes';
import { UsuarioRoutes } from './view/usuario/usuario-routes';
import { ProdutoComponent } from './view/produto/produto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pessoa', children: PessoaRoutes },
  { path: 'reserva', component: ReservaComponent },
  { path: 'usuario', children: UsuarioRoutes },
  { path: 'produto', component: ProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
