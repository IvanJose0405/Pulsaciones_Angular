import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaConsultaComponent } from './components/personas/persona-consulta/persona-consulta.component';
import { PersonasRegistroComponent } from './components/personas/personas-registro/personas-registro.component';

const routes: Routes = [
  {
    path: 'registroPersonas', 
    component: PersonasRegistroComponent
  },
  {
  path: 'consultaPersonas',
  component: PersonaConsultaComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
