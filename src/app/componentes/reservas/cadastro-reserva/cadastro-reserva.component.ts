import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-reserva',
  templateUrl: './cadastro-reserva.component.html',
  styleUrls: ['./cadastro-reserva.component.css']
})
export class CadastroReservaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cadastraReserva(){
    alert('Chamei o backend pra cadastrar a reserva')

  }
}
