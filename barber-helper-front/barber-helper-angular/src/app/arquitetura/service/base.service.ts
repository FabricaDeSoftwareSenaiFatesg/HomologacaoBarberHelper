import { HttpParams } from "@angular/common/http";

export class BaseService {

  /**
   * Método responsável por configurar as opções de requisição
   *
   * @returns {RequestOptionsArgs} configurações padrão
   */
  protected config(loading:boolean = true): any {

    const params: HttpParams = new HttpParams()

      .set('p1', `${loading}`)

    return {

      headers: this.buildHeaders(),

      params: params
    }
  }

  protected configHttpClient(loading:boolean = true): any {

    const params: HttpParams = new HttpParams()

      .set('p1', `${loading}`)

    return {

      headers: this.buildHeaders(),

      params: params
    }
  }

  /**
   * Método responsável por construir os cabeçalhos de requisição padrão nas chamadas do serviço
   *
   * @returns {Headers} cabeçalhos padrão
   */
  protected buildHeaders(): Headers {

    return new Headers({

      'Content-Type': 'application/json',

      'Accept': 'application/json'
    });
  }

  /**
   * Método responsável por fazer o mapper da resposta do servidor
   */
  protected mapper(resp: any) {
    try {

      return (resp.json() || resp.text())

    }catch (error){

      return resp;
    }
  }

}
