import { Entidade } from './entidade.model';
import { Imagem } from './imagem.model';

export class Produto extends Entidade {

  descricao: string = "";

  valor: number = 0;

  tempo: number = 0;

  imagem: Imagem;

  constructor() {
    super();
  }

}
