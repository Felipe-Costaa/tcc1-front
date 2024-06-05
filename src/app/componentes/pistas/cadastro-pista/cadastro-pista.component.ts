import { PistasService } from './../pistas.service';
import { Pista } from './../pista';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cadastro-pista',
  templateUrl: './cadastro-pista.component.html',
  styleUrls: ['./cadastro-pista.component.css']
})
export class CadastroPistaComponent implements OnInit {

  @Input() pista: Pista = {
    nome: '',
    status: '',
  }

  constructor(private service: PistasService) { }

  ngOnInit(): void {
  }

  cadastraPista(pista: Pista){
    console.log("identifiquei que o status é " + pista.status)

    if (this.pista.status == "Operando"){
      this.pista.status = <number>1
    }
    if (this.pista.status == "Em manutenção"){
      this.pista.status = <number>2
    }
    if (this.pista.status == "Parada"){
      this.pista.status = <number>0
    }
    this.service.createPista(this.pista).subscribe()
  }

}
