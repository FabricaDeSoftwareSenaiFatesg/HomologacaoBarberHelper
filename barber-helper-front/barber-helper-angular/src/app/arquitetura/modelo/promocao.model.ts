import { Produto } from './produto.model';
import { Servico } from './servico.model';
import { Entidade } from './entidade.model';

export class Promocao extends Entidade {

  descricao: string = "";

  dataInicio: Date = new Date;

  dataFim: Date = new Date;

  desconto: number = 0;

  servicos: Servico[] = [];

  produtos: Produto[] = [];

  constructor() {
    super();
  }

}
