import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-pista',
  templateUrl: './cadastro-pista.component.html',
  styleUrls: ['./cadastro-pista.component.css']
})
export class CadastroPistaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cadastraPista(){
    alert('Chamei o backend para cadastrar a pista')
  }

}
