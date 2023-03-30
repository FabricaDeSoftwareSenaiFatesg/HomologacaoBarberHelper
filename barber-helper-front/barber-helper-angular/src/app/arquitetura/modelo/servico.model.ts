import { Entidade } from './entidade.model';

export class Servico extends Entidade {

  descricao: string = "";

  valor: number = 0;

  tempo: number = 0;

  constructor() {
    super();
  }

}
