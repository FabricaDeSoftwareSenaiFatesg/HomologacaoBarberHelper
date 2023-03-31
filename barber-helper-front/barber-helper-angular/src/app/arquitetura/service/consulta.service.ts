import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import {Observable} from "rxjs";
import {BaseService} from "./base.service";
import {environment} from "../../../enviroments/enviroments";
import {Entidade} from "../modelo/entidade.model";

/**
 * Serviço inerente a consulta de entidades no backend
 * Referente a interface endpoint ConsultaEndpoint
 */
export abstract class ConsultaServico<E extends Entidade> extends BaseService {

  /**
   * Construtor do serviço no qual é recebido o path relativo a entidade que será tratada
   *
   * @param path {string} path do endpoint da entidade
   *
   * @param http {Http} serviço http provido pelo sistema subjacente
   */
  constructor(

    protected path: string,

    protected http: HttpClient) {

    super()
  }

  /**
   * Método responsável por construir uma determinada url através da concatenação do path parametrizado no construtor e
   * o path parametrizado no método
   *
   * @param path path que fará parte da url
   *
   * @returns {string} this.path + '/' + path
   */
  protected url(path: string) {

    return `${environment.api}/${this.path}/${path}`;

  }

  /**
   * Método responsável por listar os dados inerentes a entidade parametrizada <E>
   *
   * @param {Paginacao} parâmetro opcional. Caso definido, será utilizado para compor as regras de seleção da entidade.
   * Caso não seja definido, trará todos os registros da entidade parametrizada
   *
   * @returns {E[]} lista de registros da entidade parametrizada
   */
  listar(): Observable<E[]> {

    return this.http.get(`${environment.api}/${this.path}`, this.config()).pipe(map(this.mapper));

  }

  /**
   * Método responsável por obter um único registro da entidade pelo seu ID
   *
   * @param {number} identificador do registro da entidade
   *
   * @returns {E} um registro da entidade parametrizada
   */
  get(id: number): Observable<E> {

    return this.http.get(this.url(`${id}`), this.config()).pipe(map(this.mapper));

  }

}
