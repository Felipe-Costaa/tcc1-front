import { DetalhesReservaComponent } from './componentes/reservas/detalhes-reserva/detalhes-reserva.component';
import { CadastroUsuarioComponent } from './componentes/usuarios/cadastro-usuario/cadastro-usuario.component';
import { CadastroPistaComponent } from './componentes/pistas/cadastro-pista/cadastro-pista.component';
import { TelaUsuariosComponent } from './componentes/usuarios/tela-usuarios/tela-usuarios.component';
import { TelaPistasComponent } from './componentes/pistas/tela-pistas/tela-pistas.component';
import { CadastroReservaComponent } from './componentes/reservas/cadastro-reserva/cadastro-reserva.component';
import { TelaFilaComponent } from './componentes/reservas/tela-fila/tela-fila.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './componentes/tela-login/tela-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: TelaLoginComponent
  },
  {
    path: 'fila',
    component: TelaFilaComponent
  },
  {
    path: 'cadastroReserva',
    component: CadastroReservaComponent
  },
  {
    path: 'usuarios',
    component: TelaUsuariosComponent
  },
  {
    path: 'pistas',
    component: TelaPistasComponent
  },
  {
    path: 'cadastroPista',
    component: CadastroPistaComponent
  },
  {
    path: 'cadastroUsuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'detalhesReserva',
    component: DetalhesReservaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
