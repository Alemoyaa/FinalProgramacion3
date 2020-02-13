import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonaComponent } from './componentes/lista-persona/lista-persona.component';
import { AgregarPersonaComponent } from './componentes/agregar-persona/agregar-persona.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './componentes/error/error.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonaComponent,
    AgregarPersonaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
