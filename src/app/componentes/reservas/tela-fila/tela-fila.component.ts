import { ReservaService } from './../reserva.service';
import { Reserva } from './../reserva';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-fila',
  templateUrl: './tela-fila.component.html',
  styleUrls: ['./tela-fila.component.css']
})
export class TelaFilaComponent implements OnInit {

  fila: Reserva[] = [];

  constructor( private service: ReservaService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((fila) => {
      this.fila = fila
    });
  }



}
