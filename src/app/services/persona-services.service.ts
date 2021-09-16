import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServicesService {

  constructor() { }

  get(): Persona[] {

    return JSON.parse(localStorage.getItem('personas') || '{}')
  }

  post(persona: Persona) {
    let personas: Persona[] =[]
    if (this.get().length > 0) {
      personas = this.get()
      
    }
    persona.pulsacion=this.calcularPulsacion(persona);
    alert("Su pulsacion es: "+persona.pulsacion)
    personas.push(persona);
    localStorage.setItem('personas', JSON.stringify(personas));


  }

  calcularPulsacion(persona: Persona):number {
    debugger
    if(persona.sexo=='m'){
      return (220-persona.edad)/10;
    }else {
      return (210-persona.edad)/10;
    }


  }

}
