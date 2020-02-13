import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from './../../service/persona.service';
import { Persona } from './../../entidades/persona';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.css']
})
export class AgregarPersonaComponent implements OnInit {

  persona: Persona = {
    nombre: '',
    apellido: '',
    dni: 0
  }

  formularioCreado: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    dni: [0, Validators.compose([
      Validators.required, Validators.pattern('^[0-9]+$')
    ])]
  });

  constructor(private service: PersonaService,
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
    res => {
      if(res.id !== '0'){
        this.getOne(res.id);
        //console.log('Lo edito a:' +res.id);
      }
    },
    err => {
      console.log(err);
    }
  );
  }

  getOne(id: number){
    this.service.getOne(id).subscribe(
      res => {
        this.persona = res;
        this.formularioCreado = this.formBuilder.group({
          nombre: this.persona.nombre,
          apellido: this.persona.apellido,
          dni: this.persona.dni
        })
        //console.log(res.dni);
      },
      err => {
        console.log(err);
      }
    );
  }

  save(){
    this.rutaActiva.params.subscribe((data) => {
      if (data.id === '0') {
        this.add();
      } else {
        this.update();
      }
    });
  }

  add(){
    this.service.post(this.formularioCreado.value).subscribe(
      (data) => {
      this.persona = data;
      //console.log('agregar a: '+data.nombre)
      this.router.navigate(['/']);
    });
  }

  update(){
    this.service.put(this.persona.id, this.formularioCreado.value).subscribe(
      (data) => {
      this.persona = data;
      //console.log('editar a: '+data.nombre)
      this.router.navigate(['']);
    });
  }
}
