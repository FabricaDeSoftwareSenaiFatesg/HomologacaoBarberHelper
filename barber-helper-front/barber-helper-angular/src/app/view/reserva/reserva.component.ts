import { ChangeDetectorRef, Component } from '@angular/core';
import { BaseComponent } from 'src/app/arquitetura/component/base.component';
import { Reserva } from 'src/app/arquitetura/modelo/reserva.model';
import { ReservaService } from './reserva.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent extends BaseComponent<Reserva> {

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    protected override router: Router,
    protected override activatedRoute: ActivatedRoute,
    protected override service: ReservaService
    ) {
    super(changeDetectorRef, router, activatedRoute, service);
  }

  protected override newEntidade(): Reserva {
    return new Reserva();
  }

  date: Date = new Date();

  consultarHorarios() {
    console.log(this.date);

    this.service.consultarHorarios(this.date).subscribe();

  }
}
