import { Message } from './../message';
import { Reserva } from './../reserva';
import { Component, OnInit, Input } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';




@Component({
  selector: 'app-detalhes-reserva',
  templateUrl: './detalhes-reserva.component.html',
  styleUrls: ['./detalhes-reserva.component.css']
})
export class DetalhesReservaComponent implements OnInit {

  hora_atual: Date = new Date();
  timeLeft: number = 0;
  subscription: Subscription | null = null;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  message: Message = {
    id_reserva: 0,
    to: '+553599185634',
    body: '',
  }

  @Input() reserva: Reserva = {
    hora_reservada: new Date(),
    id_pista_reservada: 0,
    nome_cliente: '',
    wpp_cliente: '',
    status: ''

  }

  mensagens_enviadas: any;

  mensagem_enviada: any = {
    reserva_id: this.reserva.id,
    mensagem: ''
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
        this.service.getMensagensEnviadas(id).subscribe((mensagens) => {
          this.mensagens_enviadas = mensagens
        })
        const horaReservadaTime = new Date(this.reserva.hora_reservada).getTime();
        const horaAtualTime = new Date(this.hora_atual).getTime();
        this.timeLeft = horaReservadaTime - horaAtualTime;
        this.startCountdown();
      });
    });
  }




  startCountdown() {
    this.subscription = interval(1000).subscribe(() => {
      if (this.timeLeft > 0) {
        this.timeLeft -= 1000;
        this.updateTimeUnits();
      }
    });
  }

  updateTimeUnits() {
    this.days = Math.floor(this.timeLeft / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);
    console.log("Verificando minutos")
    console.log(`minutos: ${this.minutes}`)

    if(this.minutes == 5 && this.seconds == 0){
      console.log(`Menos de ${this.minutes} minutos para reserva`)
      this.notification()
    }
    if(this.minutes == 0 && this.seconds == 0 && this.hours == 0){
      this.notification()
      this.service.editReserva(this.reserva).subscribe()
    }
  }

  notification() {
    console.log("Metodo de notificação")
    const messageNotification: Message = {
      to: '+553599185634',
      body: `Menos de ${this.minutes} minutos para o horario reservado.`
    }
    this.mensagem_enviada.mensagem = messageNotification.body

    //this.service.enviarMensagem(messageNotification).subscribe()
    this.enviarMensagem(messageNotification)
  }

  enviarMensagem(message: Message) {
    this.message.id_reserva = this.route.snapshot.params['id'];
    this.service.enviarMensagem(message).subscribe()
    this.route.params.subscribe(params => {
      this.mensagem_enviada.reserva_id = params['id']
    })
    this.service.createMensagemEnviada(this.mensagem_enviada).subscribe(() => {
      this.mensagem_enviada.mensagem = ''
    })

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}






