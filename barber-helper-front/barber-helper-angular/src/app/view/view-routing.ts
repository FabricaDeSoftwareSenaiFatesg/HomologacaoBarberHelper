import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PessoaRoutes } from "./pessoa/pessoa-routes";
import { ReservaRoutes } from "./reserva/reserva-routes";
import { UsuarioRoutes } from "./usuario/usuario-routes";
import { ProdutoComponent } from "./produto/produto.component";
import { LojaComponent } from "./loja/loja.component";
import { SobreComponent } from "./sobre/sobre.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pessoa', children: PessoaRoutes },
  { path: 'reserva', children: ReservaRoutes },
  { path: 'usuario', children: UsuarioRoutes },
  { path: 'produto', component: ProdutoComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'sobre', component: SobreComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ViewRoutingModule { }
