import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario: Usuario = {
    nome: '',
    email: '',
    senha: '',
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

  deletarUsuario(id: number) {
    this.service.deleteUsuario(id).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/usuarios']);
      });
    });
  }
}
