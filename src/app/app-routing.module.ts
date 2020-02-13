import { AgregarPersonaComponent } from './componentes/agregar-persona/agregar-persona.component';
import { ListaPersonaComponent } from './componentes/lista-persona/lista-persona.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path: '', component: ListaPersonaComponent},
  {path: 'persona/:id', component: AgregarPersonaComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
