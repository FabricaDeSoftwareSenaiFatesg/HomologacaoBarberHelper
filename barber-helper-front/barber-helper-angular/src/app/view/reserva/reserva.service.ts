import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ManutencaoServico} from "../../arquitetura/service/manutencao.service";
import {Reserva} from "../../arquitetura/modelo/reserva.model";
import {Observable} from "rxjs";
import {environment} from "../../../enviroments/enviroments";
import {map} from "rxjs/operators";
import {HorariosDisponiveisDTO} from "../../arquitetura/modelo/horariosDisponiveisDTO";

@Injectable({
  providedIn: 'root'
})
export class ReservaService extends ManutencaoServico<Reserva>{

  constructor(http: HttpClient) {
    super('comunicado', http);
  }

  consultarHorarios(data: Date): Observable<HorariosDisponiveisDTO> {

    return this.http.post(`${environment.api}/${this.path}/consultarHorarios`, data, this.config()).pipe(map(this.mapper))

  }
}
