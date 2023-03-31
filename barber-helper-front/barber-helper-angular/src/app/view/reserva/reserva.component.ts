import { Component } from '@angular/core';
import { ManutencaoComponent } from 'src/app/arquitetura/component/manutencao.component';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent extends ManutencaoComponent {

  date: Date = new Date();

  consultarHorarios() {
    console.log(this.date);

  }
}
