import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = 'api/usuarios'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API)
  }

  createUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API, usuario)
  }

  editUsuario(usuario: Usuario): Observable<Usuario>{
    const url = `${this.API}/${usuario.id}`
    return this.http.put<Usuario>(url, usuario)
  }

  deleteUsuario(id: number): Observable<Usuario>{
    const url = `${this.API}/${id}`
    return this.http.delete<Usuario>(url)
    }

  findByID(id: number): Observable<Usuario>{
    const url = `${this.API}/${id}`
    return this.http.get<Usuario>(url)
  }

}


