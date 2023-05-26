import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reserva} from "../../arquitetura/modelo/reserva.model";
import { BaseService } from 'src/app/arquitetura/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService extends BaseService<Reserva>{

  constructor(httpClient: HttpClient) {
    super( httpClient, 'reserva');
  }

  consultarHorarios(pesquisaHorarios: any) {
    return this.httpClient.post<any>(`${this.API}/${this.path}/consultarHorarios`, pesquisaHorarios);
  }

  listarFiltrado(pesquisaHorarios: any) {
    return this.httpClient.post<any>(`${this.API}/${this.path}/listarFiltrado`, pesquisaHorarios);
  }

  salvarReserva(reserva: any) {
    return this.httpClient.post<any>(`${this.API}/${this.path}/salvarReserva`, reserva);
  }
}
