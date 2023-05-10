import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/arquitetura/modelo/pessoa.model';
import { BaseService } from 'src/app/arquitetura/service/base.service';
import {Usuario} from "../../arquitetura/modelo/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<Usuario> {

  constructor(httpClient: HttpClient) {
    super( httpClient, "usuario");
  }

}
