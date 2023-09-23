import { Component } from '@angular/core';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';



  public personas : Array<any> = []

  constructor (
    private PersonasService:PersonasService
  ){

    this.PersonasService.getPersonas().subscribe((resp: any) => {
      this.personas = resp
    })
  }
}
