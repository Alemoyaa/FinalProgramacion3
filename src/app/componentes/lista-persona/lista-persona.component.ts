import { PersonaService } from './../../service/persona.service';
import { Persona } from './../../entidades/persona';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent implements OnInit {

  personas: Persona[] = [];
  constructor(
    private servicio: PersonaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.servicio.getAll().subscribe((data) => {
      this.personas = data;
    });
  }

  getOne(id: number) {
    this.servicio.getOne(id).subscribe((data) => {
    });
  }

  eliminarP(id: number) {
    const opcion = confirm('¿Esta seguro que desea eliminar?');
    if (opcion) {
      this.servicio.delete(id).subscribe((data) => {
        this.personas.forEach((element, posicion) => {
          if(element.id === id){
            this.personas.splice(posicion);
          }
        });
        //console.log(id);
        alert('Registro eliminado');
      });
    }
  }

  editarP(idPersona: number) {
    this.router.navigate([`persona/${idPersona}`]);
  }

  agregar(idPersona: number){
    this.router.navigate([`persona/${idPersona}`]);
  }

}
