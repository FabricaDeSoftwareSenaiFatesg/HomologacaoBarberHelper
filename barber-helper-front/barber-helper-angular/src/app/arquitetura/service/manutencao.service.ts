import { HttpClient } from '@angular/common/http';
import { ConsultaServico } from './consulta.service';
import {Observable} from "rxjs";
import {environment} from "../../../enviroments/enviroments";
import {Entidade} from "../modelo/entidade.model";
import {map} from 'rxjs/operators';

/**
 * Serviço inerente a manutenção de entidades no backend
 *
 * Referente a interface endpoint ManutencaoEndpoint
 */
export abstract class ManutencaoServico<E extends Entidade> extends ConsultaServico<E> {

  override path: string;

  /**
   * Construtor do serviço no qual é recebido o path relativo a entidade que será tratada
   *
   * @param path {string} path do endpoint da entidade
   *
   * @param http {Http} serviço http provido pelo sistema subjacente
   */
  constructor(path: string, http: HttpClient) {

    super(path, http);

    this.path = path;
  }

  /**
   * Método responsável por proceder com a chamada do recurso de salvar a entidade parametrizada
   *
   * @param {E} entidade que será persistida
   *
   * @returns {string} mensagem de sucesso
   */
  salvar(entidade: E): Observable<string> {

    return this.http.post(`${environment.api}/${this.path}`, entidade, this.config()).pipe(map(this.mapper));

  }

  /**
   * Método responsável por proceder com a chamada do recurso de alterar a entidade parametrizada
   *
   * @param {E} entidade que será alterada
   *
   * @returns {string} mensagem de sucesso
   */
  alterar(entidade: E): Observable<string> {

    return this.http.put(`${environment.api}/${this.path}`, entidade, this.config()).pipe(map(this.mapper));
  }

  /**
   * Método responsável por excluir a entidade parametrizada pelo seu identificador
   *
   * @param {E} entidade que será alterada
   *
   * @returns {string} mensagem de sucesso
   */
  excluir(entidade: E): Observable<string> {

    return this.http.delete(`${environment.api}/${this.path}/` + entidade.id, this.config()).pipe(map(this.mapper));
  }

  /**
   * Método responsável por alterar o status da entidade parametrizada pelo seu identificador
   *
   * @param {E} entidade que será alterada
   *
   * @returns {string} mensagem de sucesso
   */
  status(entidade: E): Observable<string> {

    return this.http.put(`${environment.api}/${this.path}/` + entidade.id, this.config()).pipe(map(this.mapper));
  }

}
