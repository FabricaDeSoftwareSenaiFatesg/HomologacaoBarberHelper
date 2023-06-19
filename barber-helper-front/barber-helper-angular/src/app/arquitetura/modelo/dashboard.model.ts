import {Entidade} from "./entidade.model";
import {Pedido} from "./pedido.model";
import {Servico} from "./servico.model";

export class Dashboard extends Entidade {

  pedidos: Pedido[] = [];

  servicos: Servico[] = [];

  constructor() {
    super();
  }

}
