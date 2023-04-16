import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reserva} from "../../arquitetura/modelo/reserva.model";
import {HorariosDisponiveisDTO} from "../../arquitetura/modelo/horariosDisponiveisDTO";
import { BaseService } from 'src/app/arquitetura/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService extends BaseService<Reserva>{

  http: HttpClient;

  constructor(http: HttpClient) {
    super( http, 'comunicado');
  }

  consultarHorarios(data: Date) {

    return this.http.post<HorariosDisponiveisDTO>(`${super.API}/reserva/consultarHorarios`, data);

  }
}
