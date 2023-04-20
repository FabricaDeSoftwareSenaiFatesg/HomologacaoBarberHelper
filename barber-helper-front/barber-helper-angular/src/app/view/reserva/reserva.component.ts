import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { BaseComponent } from 'src/app/arquitetura/component/base.component';
import { Reserva } from 'src/app/arquitetura/modelo/reserva.model';
import { ReservaService } from './reserva.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent extends BaseComponent<Reserva> implements OnInit{

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: ReservaService) {

    super(changeDetectorRef, router, activatedRoute, service);

    this.ngOnInit();

  }

  override ngOnInit(): void {

    this.newEntidade();

  }

  date: Date = new Date();
  horarios: string[] = [];

  override ngOnInit(): void {

    this.newEntidade();

  }

  protected override newEntidade(): Reserva {
    return new Reserva();
  }

  consultarHorarios() {

    this.service.consultarHorarios(this.date).subscribe(response => {
      this.horarios = response.entity;
    });

  }
}
