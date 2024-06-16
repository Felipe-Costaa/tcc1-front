import { Reserva } from './../reserva';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-deletar-reserva',
  templateUrl: './deletar-reserva.component.html',
  styleUrls: ['./deletar-reserva.component.css']
})
export class DeletarReservaComponent implements OnInit {

  @Input() reserva: Reserva = {
    id: 0,
    hora_reservada: new Date("2000-01-01T00:00:00Z"),
    id_pista_reservada: 0,
    nome_cliente: '',
    wpp_cliente: '',
    status: ''
  }

  constructor(
    private service: ReservaService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  deletarReserva(id: number) {
    this.service.deleteReserva(id).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/fila']);
      })
    })

  }
}
