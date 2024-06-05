import { Observable } from 'rxjs';
import { Pista } from './pista';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PistasService {

  private readonly API = 'api/pistas'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pista[]> {
    return this.http.get<Pista[]>(this.API)
  }

  createPista(pista: Pista): Observable<Pista>{
    console.log("estou mandando esse objeto para a requisição" + pista)
    return this.http.post<Pista>(this.API, pista)
  }

  deletePista(id: number): Observable<Pista>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pista>(url)
    }

  findByID(id: number): Observable<Pista>{
    const url = `${this.API}/${id}`
    return this.http.get<Pista>(url)
  }

}
