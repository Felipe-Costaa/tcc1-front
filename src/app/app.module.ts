import { HttpClientModule } from '@angular/common/http'; // Importa o HttpClientModule
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
import { TelaUsuariosComponent } from './componentes/usuarios/tela-usuarios/tela-usuarios.component';
import { CadastroPistaComponent } from './componentes/pistas/cadastro-pista/cadastro-pista.component';
import { CadastroUsuarioComponent } from './componentes/usuarios/cadastro-usuario/cadastro-usuario.component';
import { FormsModule } from '@angular/forms';
import { DetalhesReservaComponent } from './componentes/reservas/detalhes-reserva/detalhes-reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    TelaLoginComponent,
    TelaFilaComponent,
    CardReservaComponent,
    CadastroReservaComponent,
    TelaPistasComponent,
    TelaUsuariosComponent,
    CadastroPistaComponent,
    CadastroUsuarioComponent,
    DetalhesReservaComponent,
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
