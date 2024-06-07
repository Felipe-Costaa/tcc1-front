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
  private readonly APIM = 'api'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.API)
  }

  getById(id: number): Observable<Reserva> {
    const url = `${this.API}/${id}`;
    return this.http.get<Reserva>(url);
  }

  enviarMensagem(message: Message){
    const url = `${this.APIM}/send-message`;
    return this.http.post(url, message,{ responseType: 'text' })
  }

  createReserva(reserva: Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(this.API, reserva)
  }

}
