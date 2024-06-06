import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(
    private service: UsuarioService
  ) { }

  @Input() usuario: Usuario = {
    nome: '',
    email: '',
    senha: '',
  }

  ngOnInit(): void {
  }

  cadastrarUsuario(usuario: Usuario){
    this.service.createUsuario(usuario).subscribe()
  }

}
