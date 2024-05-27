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

}
