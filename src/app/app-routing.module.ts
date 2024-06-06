import { EditarUsuarioComponent } from './componentes/usuarios/editar-usuario/editar-usuario.component';
import { ListagemUsuariosComponent } from './componentes/usuarios/listagem-usuarios/listagem-usuarios.component';
import { EditarPistaComponent } from './componentes/pistas/editar-pista/editar-pista.component';
import { DetalhesReservaComponent } from './componentes/reservas/detalhes-reserva/detalhes-reserva.component';
import { CadastroUsuarioComponent } from './componentes/usuarios/cadastro-usuario/cadastro-usuario.component';
import { CadastroPistaComponent } from './componentes/pistas/cadastro-pista/cadastro-pista.component';
import { TelaPistasComponent } from './componentes/pistas/tela-pistas/tela-pistas.component';
import { CadastroReservaComponent } from './componentes/reservas/cadastro-reserva/cadastro-reserva.component';
import { TelaFilaComponent } from './componentes/reservas/tela-fila/tela-fila.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './componentes/tela-login/tela-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: TelaLoginComponent},
  { path: 'fila', component: TelaFilaComponent},
  { path: 'cadastroReserva', component: CadastroReservaComponent},
  { path: 'usuarios', component: ListagemUsuariosComponent},
  { path: 'pistas', component: TelaPistasComponent},
  { path: 'cadastroPista', component: CadastroPistaComponent},
  { path: 'cadastroUsuario', component: CadastroUsuarioComponent},
  { path: 'detalhesReserva/:id', component: DetalhesReservaComponent},
  { path: 'pistas/editarPista/:id', component: EditarPistaComponent},
  { path: 'usuarios/editarUsuarios/:id', component: EditarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
