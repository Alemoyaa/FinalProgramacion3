import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  _url:string = 'http://localhost:9001/api/v1/persona/';

  constructor(private http:HttpClient, private router: Router) {

  }

  getAll() : Observable<Persona[]>{
    try{
      return this.http.get<Persona[]>(this._url);
    } catch(error){
      alert('Se produjo un error al traer lo elementos de la tabla');
      console.log(error);
      this.router.navigate([`error`]);
    }
  }

  getOne(id:number) : Observable<Persona>{
    try {
      return this.http.get<Persona>(this._url+id);
    } catch (error) {
      alert('Se produjo un error al traer el elemento de la tabla');
      console.log(error);
      this.router.navigate([`error`]);
    }
  }

  post(persona:Persona) : Observable<Persona>{
    try {
      return this.http.post<Persona>(this._url, persona);
    } catch (error) {
      alert('Se produjo un error al guardar un elemento en la tabla');
      console.log(error);
      this.router.navigate([`error`]);
    }
  }

  put(id:number, persona:Persona) : Observable<Persona>{
    try {
      return this.http.put<Persona>(this._url+id, persona);
    } catch (error) {
      alert('Se produjo un error al guardar un elemento en la tabla');
      console.log(error);
      this.router.navigate([`error`]);
    }
  }

  delete(id:number) : Observable<any>{
    try{
      return this.http.delete(this._url+id);
    }catch(error){
      alert('Se produjo un error al eliminar el elemento de la tabla');
      console.log(error);
      this.router.navigate([`error`]);
    }
  }
}
