import { Message } from './message';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from './reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private readonly API = 'api/reservas'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.API)
  }

  getById(id: number): Observable<Reserva> {
    const url = `${this.API}/${id}`;
    return this.http.get<Reserva>(url);
  }

  enviarMensagem(message: Message){
    console.log("Entrei no service para enviar mensagem com o objeto" + message)
    const url = "/send-message";
    console.log("Vou fazer a requisição no endpoint " + url)
    this.http.post(url, message)
  }


}
