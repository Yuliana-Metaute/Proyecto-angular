import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  url = 'https://jsonplaceholder.typicode.com/users'


  constructor(
    private http: HttpClient 
  ) {
    console.log ('Servicio persona')
   }
   getPersonas(){
    let header = new HttpHeaders ()

    .set('Type-content','aplication/json')


    return this.http.get(this.url,{
      headers: header
    });
   }
}
