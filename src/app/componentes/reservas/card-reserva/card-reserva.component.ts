import { Message } from './../message';
import { ReservaService } from './../reserva.service';
import { Reserva } from './../reserva';
import { Component, OnInit, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-card-reserva',
  templateUrl: './card-reserva.component.html',
  styleUrls: ['./card-reserva.component.css']
})
export class CardReservaComponent implements OnInit {

  hora_atual: Date = new Date(); // Data atual
  timeLeft: number = 0;
  subscription: Subscription | null = null; // Inicializando como null
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;


@Input() reserva: Reserva = {
  hora_reservada: new Date(),
  id_pista_reservada: 0,
  nome_cliente: 'Cliente de text hardcoded',
  wpp_cliente: '35999185634'
}


  constructor(
    private service: ReservaService,
  ) { }

  ngOnInit(): void {
    const horaReservadaTime = new Date(this.reserva.hora_reservada).getTime();
    const horaAtualTime = new Date(this.hora_atual).getTime();
    this.timeLeft = horaReservadaTime - horaAtualTime;
    this.startCountdown();
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

    if(this.minutes == 4 && this.seconds == 0){
      console.log(`Menos de ${this.minutes} minutos para reserva`)
      this.notification()
    }


  }

  notification(){
      console.log("Metodo de notificação")
      const messageNotification: Message = {
      to: '+553599185634',
      body: `Your reservation time is less than ${this.minutes} minutes away.`
    }
    this.service.enviarMensagem(messageNotification).subscribe()
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}


