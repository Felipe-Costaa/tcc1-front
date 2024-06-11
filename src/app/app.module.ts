import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { TelaFilaComponent } from './componentes/reservas/tela-fila/tela-fila.component';
import { TelaLoginComponent } from './componentes/tela-login/tela-login.component';
import { CardReservaComponent } from './componentes/reservas/card-reserva/card-reserva.component';
import { CadastroReservaComponent } from './componentes/reservas/cadastro-reserva/cadastro-reserva.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TelaPistasComponent } from './componentes/pistas/tela-pistas/tela-pistas.component';
import { CadastroPistaComponent } from './componentes/pistas/cadastro-pista/cadastro-pista.component';
import { CadastroUsuarioComponent } from './componentes/usuarios/cadastro-usuario/cadastro-usuario.component';
import { FormsModule } from '@angular/forms';
import { DetalhesReservaComponent } from './componentes/reservas/detalhes-reserva/detalhes-reserva.component';
import { PistaComponent } from './componentes/pistas/pista/pista.component';
import { EditarPistaComponent } from './componentes/pistas/editar-pista/editar-pista.component';
import { ListagemUsuariosComponent } from './componentes/usuarios/listagem-usuarios/listagem-usuarios.component';
import { UsuarioComponent } from './componentes/usuarios/usuario/usuario.component';
import { EditarUsuarioComponent } from './componentes/usuarios/editar-usuario/editar-usuario.component';
import { DeletarReservaComponent } from './componentes/reservas/deletar-reserva/deletar-reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    TelaLoginComponent,
    TelaFilaComponent,
    CardReservaComponent,
    CadastroReservaComponent,
    TelaPistasComponent,
    CadastroPistaComponent,
    CadastroUsuarioComponent,
    DetalhesReservaComponent,
    PistaComponent,
    EditarPistaComponent,
    ListagemUsuariosComponent,
    UsuarioComponent,
    EditarUsuarioComponent,
    DeletarReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
