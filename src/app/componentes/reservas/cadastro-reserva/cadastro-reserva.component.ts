import { Router, ActivatedRoute } from '@angular/router';
import { PistasService } from './../../pistas/pistas.service';
import { ReservaService } from './../reserva.service';
import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { Pista } from '../../pistas/pista';
import { Message } from '../message';

@Component({
  selector: 'app-cadastro-reserva',
  templateUrl: './cadastro-reserva.component.html',
  styleUrls: ['./cadastro-reserva.component.css']
})
export class CadastroReservaComponent implements OnInit {

  @Input() reserva: Reserva = {
    hora_reservada: new Date('2000-01-01T00:00:00Z'),
    id_pista_reservada: 0,
    nome_cliente: '',
    wpp_cliente: '',
    status: ''
  }

  message: Message = {
    id_reserva: 0,
    to: '+553599185634',
    body: '',
  }

  mensagem_enviada: any = {
    reserva_id: this.reserva.id,
    mensagem: ''
  }


  pistas: Pista[] = []
  pistasDisponiveis: Pista[] = []

  constructor(
    private service: ReservaService,
    private auxService: PistasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.auxService.getAll().subscribe((pistas) => {
      this.pistas = pistas
      this.pistasDisponiveis = this.pistas.filter(pista => pista.status == 1)
      console.log(this.pistasDisponiveis)
    });

  }
  cadastraReserva() {
    this.reserva.status = 'aberta'
    this.service.createReserva(this.reserva).subscribe(() => {
      this.notification()
    })
  }

  notification() {
    console.log("Metodo de notificação")
    const messageNotification: Message = {
      to: '+553599185634',
      body: `Reserva realizada para ${this.reserva.hora_reservada}.`
    }
    this.mensagem_enviada.mensagem = messageNotification.body
    this.enviarMensagem(messageNotification)
  }

  enviarMensagem(message: Message) {
    this.message.id_reserva = this.route.snapshot.params['id'];
    this.service.enviarMensagem(message).subscribe()
    this.mensagem_enviada.reserva_id = this.reserva.id
    this.service.createMensagemEnviada(this.mensagem_enviada).subscribe(() => {
      this.mensagem_enviada.mensagem = ''
    })

  }
}
