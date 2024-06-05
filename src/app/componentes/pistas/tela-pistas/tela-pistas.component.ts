import { PistasService } from './../pistas.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pista } from '../pista';

@Component({
  selector: 'app-tela-pistas',
  templateUrl: './tela-pistas.component.html',
  styleUrls: ['./tela-pistas.component.css']
})
export class TelaPistasComponent implements OnInit {

  private readonly API = 'api/pistas'

  pistas: Pista[] = [];


  constructor(
    private http: HttpClient,
    private service: PistasService
    ) { }


  ngOnInit(): void {
    this.service.getAll().subscribe((pistas) => {
      this.pistas = pistas
    });
  }

}
