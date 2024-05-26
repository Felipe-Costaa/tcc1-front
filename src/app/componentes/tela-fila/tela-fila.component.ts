import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-fila',
  templateUrl: './tela-fila.component.html',
  styleUrls: ['./tela-fila.component.css']
})
export class TelaFilaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.carregaFila();
  }

  carregaFila(){
    alert('Chamei o backend para dar um get na lista de reservas')
  }

}
