import { CadastroPistaComponent } from './componentes/cadastro-pista/cadastro-pista.component';
import { TelaUsuariosComponent } from './componentes/tela-usuarios/tela-usuarios.component';
import { TelaPistasComponent } from './componentes/tela-pistas/tela-pistas.component';
import { CadastroReservaComponent } from './componentes/cadastro-reserva/cadastro-reserva.component';
import { TelaFilaComponent } from './componentes/tela-fila/tela-fila.component';
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
