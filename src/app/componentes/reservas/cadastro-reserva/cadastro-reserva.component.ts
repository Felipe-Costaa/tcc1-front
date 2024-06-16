import { PistasService } from './../../pistas/pistas.service';
import { ReservaService } from './../reserva.service';
import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { Pista } from '../../pistas/pista';

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

  pistas: Pista[] = []

  constructor(
    private service: ReservaService,
    private auxService: PistasService
  ) { }

  ngOnInit(): void {
    this.auxService.getAll().subscribe((pistas) => {
      this.pistas = pistas
    });
  }
  cadastraReserva(){
      this.reserva.status = 'aberta'
      this.service.createReserva(this.reserva).subscribe()
    }
  }

