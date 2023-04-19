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

  consultarHorarios(data: Date) {

    return this.httpClient.post<any>(`${this.API}/reserva/consultarHorarios`, data);
  }
}
