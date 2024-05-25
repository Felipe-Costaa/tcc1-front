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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
