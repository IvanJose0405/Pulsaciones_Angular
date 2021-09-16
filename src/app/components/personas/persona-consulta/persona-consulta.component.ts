import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaServicesService } from 'src/app/services/persona-services.service';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {

  personas: Persona[]=[];
  constructor(private personasService: PersonaServicesService) { }

  ngOnInit(): void {
    this.personas=this.personasService.get();
    console.log(this.personas)
  }

}
