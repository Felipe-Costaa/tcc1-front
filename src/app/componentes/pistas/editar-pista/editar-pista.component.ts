import { Router, ActivatedRoute } from '@angular/router';
import { PistasService } from './../pistas.service';
import { Pista } from './../pista';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-pista',
  templateUrl: './editar-pista.component.html',
  styleUrls: ['./editar-pista.component.css']
})
export class EditarPistaComponent implements OnInit {

  pista: Pista = {
    nome: '',
    status: ''
  }


  constructor(
    private service: PistasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findByID(parseInt(id!)).subscribe((pista) => {
      this.pista = pista
      if (this.pista.status == 1){
        this.pista.status = <string>"Operando"
      }
      if (this.pista.status == 2){
        this.pista.status = <string>"Em manutenção"
      }
      if (this.pista.status == 0){
        this.pista.status = <string>"Parada"
      }
    })
  }

  editarPista() {
    if (this.pista.status == "Operando"){
      this.pista.status = <number>1
    }
    if (this.pista.status == "Em manutenção"){
      this.pista.status = <number>2
    }
    if (this.pista.status == "Parada"){
      this.pista.status = <number>0
    }
    this.service.editPista(this.pista).subscribe(() =>{
      this.router.navigate(['/pistas'])
    })
  }

  cancelar(){
    this.router.navigate(['/pistas'])
  }
}
