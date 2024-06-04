import { Reserva } from './../reserva';
import { Component, OnInit, Input } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detalhes-reserva',
  templateUrl: './detalhes-reserva.component.html',
  styleUrls: ['./detalhes-reserva.component.css']
})
export class DetalhesReservaComponent implements OnInit {

  @Input() reserva: Reserva = {
    hora_reservada: new Date(),
    id_pista_reservada: 0,
    nome_cliente: 'Cliente de text hardcoded',
    wpp_cliente: '35999185634'

  }

  constructor(
    private service: ReservaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.service.getById(id).subscribe((reserva) => {
        this.reserva = reserva;
      });
    });
  }

  enviarMensagem(){
    alert("mandando mensagem")

  }

}
