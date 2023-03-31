import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/arquitetura/modelo/pessoa.model';
import { ManutencaoServico } from 'src/app/arquitetura/service/manutencao.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends ManutencaoServico<Pessoa> {

  constructor(http: HttpClient) {
    super("pessoa", http);
  }

}
