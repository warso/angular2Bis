import { Component, OnInit, Input} from '@angular/core';

import { Sejour } from './shared/domain/sejour'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  sejours:Sejour[]

  ngOnInit() {
    this.sejours = [
      new Sejour('s01',"Paris", "img/paris.jpg", 600),
      new Sejour('s02',"New York", "img/nyc.jpg", 1300),
      new Sejour('s03',"Rio De Janeiro", "img/rio-de-janeiro.jpg", 1400),
      new Sejour('s04',"Rome", "img/rome.jpg", 800),
      new Sejour('s05',"Tokyo", "img/tokyo.jpg", 2000),
      new Sejour('s06',"Paris", "img/paris.jpg", 600)
    ]
  }
}
