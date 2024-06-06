import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuariosComponent implements OnInit {

  usuarios: Usuario[] = []

  constructor(
    private service: UsuarioService
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((usuarios) =>{
      this.usuarios = usuarios
    })
  }



}
