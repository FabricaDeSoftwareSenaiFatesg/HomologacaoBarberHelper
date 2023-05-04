import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/arquitetura/modelo/usuario.model';
import { BaseService } from 'src/app/arquitetura/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService<Usuario> {

  constructor(httpClient: HttpClient) {
    super( httpClient, "usuario");
  }

}
