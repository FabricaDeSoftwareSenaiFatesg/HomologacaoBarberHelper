import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/arquitetura/modelo/pessoa.model';
import { BaseService } from 'src/app/arquitetura/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends BaseService<Pessoa> {

  http: HttpClient;

  constructor(http: HttpClient) {
    super( http, "pessoa");
  }

}
