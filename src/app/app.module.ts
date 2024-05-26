import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { TelaFilaComponent } from './componentes/tela-fila/tela-fila.component';
import { TelaLoginComponent } from './componentes/tela-login/tela-login.component';
import { CardReservaComponent } from './componentes/card-reserva/card-reserva.component';
import { CadastroReservaComponent } from './componentes/cadastro-reserva/cadastro-reserva.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TelaPistasComponent } from './componentes/tela-pistas/tela-pistas.component';
import { TelaUsuariosComponent } from './componentes/tela-usuarios/tela-usuarios.component';
import { CadastroPistaComponent } from './componentes/cadastro-pista/cadastro-pista.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
