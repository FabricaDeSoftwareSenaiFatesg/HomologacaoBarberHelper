import { Entidade } from './entidade.model';
import { Pessoa } from './pessoa.model';
import { TipoUsuarioEnum } from './tipo-usuario.enum';

export class Usuario extends Entidade {

  email: string = "";

  senha: string = "";

  login: string = "";

  pessoa: Pessoa = new Pessoa;

  tipo: TipoUsuarioEnum = TipoUsuarioEnum.CLIENTE;

  constructor() {
    super();
  }

}
