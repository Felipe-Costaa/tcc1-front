import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { TelaFilaComponent } from './componentes/tela-fila/tela-fila.component';
import { TelaLoginComponent } from './componentes/tela-login/tela-login.component';
import { CardReservaComponent } from './componentes/card-reserva/card-reserva.component';
import { CadastroReservaComponent } from './componentes/cadastro-reserva/cadastro-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    TelaLoginComponent,
    TelaFilaComponent,
    CardReservaComponent,
    CadastroReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
