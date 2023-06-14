import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/arquitetura/modelo/usuario.model';
import { BaseService } from 'src/app/arquitetura/service/base.service';

export const LOCAL_STORAGE_ITEM_USER: string = 'barber.manager.current.user'

export const LOCAL_STORAGE_TOKEN: string = 'barber.manager.current.token'

export function usuarioLogado() {

  return localStorage.getItem(LOCAL_STORAGE_ITEM_USER);

}

export function setUsuarioLogado(usuario: Usuario) {

  localStorage.setItem(LOCAL_STORAGE_ITEM_USER, JSON.stringify(usuario));

}

export function clearTokenUsuario() {

  localStorage.removeItem(LOCAL_STORAGE_ITEM_USER);

}

export function setToken(token: string) {

  localStorage.setItem(LOCAL_STORAGE_TOKEN, token);

}

export function removeToken() {

  localStorage.removeItem(LOCAL_STORAGE_TOKEN);

}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService<Usuario> {

  private _router: Router = new Router();

  constructor(httpClient: HttpClient) {
    super( httpClient, "usuario");
  }

  autenticarUsuario(usuario: Usuario): Observable<any> {

    return this.httpClient.post<boolean>(`${this.API}/${this.path}/autenticar-usuario`, usuario);

  }

  sair(): Observable<any> {

    clearTokenUsuario();

    this._router.navigate(['login']);

    return this.logout();

  }

  public logar(usuario:string, senha:string): Observable<any>{
    return this.httpClient.post('http://localhost:8080/login', {'usuario': usuario, 'senha': senha})
  }

  public inserirUsuarioNoServidorDeAutenticacao(login: string, senha:string){
    return this.httpClient.post('http://localhost:8080/login/criar', {'login': login, 'pass': senha})
  }

}

