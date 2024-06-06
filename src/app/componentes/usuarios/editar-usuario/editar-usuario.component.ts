import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    email: ''
  }

  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findByID(parseInt(id!)).subscribe((usuario) => {
      this.usuario = usuario

    })
  }

  editarUsuario() {
    this.service.editUsuario(this.usuario).subscribe(() => {
      this.router.navigate(['/usuarios'])
    })
  }

  cancelar() {
    this.router.navigate(['/usuarios'])
  }
}
