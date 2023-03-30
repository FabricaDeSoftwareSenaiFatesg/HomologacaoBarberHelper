import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {

  date: Date = new Date();

  consultarHorarios() {
    console.log(this.date);

  }
}
