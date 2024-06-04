import { Reserva } from './../reserva';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-reserva',
  templateUrl: './card-reserva.component.html',
  styleUrls: ['./card-reserva.component.css']
})
export class CardReservaComponent implements OnInit {

@Input() reserva: Reserva = {
  hora_reservada: new Date(),
  id_pista_reservada: 0,
  nome_cliente: 'Cliente de text hardcoded',
  wpp_cliente: '35999185634'
}

  constructor() { }

  ngOnInit(): void {
  }

}
