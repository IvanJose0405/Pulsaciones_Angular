import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaServicesService } from 'src/app/services/persona-services.service';


@Component({
  selector: 'app-personas-registro',
  templateUrl: './personas-registro.component.html',
  styleUrls: ['./personas-registro.component.css']
})
export class PersonasRegistroComponent implements OnInit {
  
  persona:Persona;

  constructor(private personasService: PersonaServicesService) {
    this.persona=new Persona();
   }

  ngOnInit(): void {
  }

  add(){
    debugger
    this.personasService.post(this.persona);
    alert("Persona Guardada")
  }

}
