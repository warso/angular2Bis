import { Component, OnInit, Input } from '@angular/core';
import { Sejour } from '../shared/domain/sejour';
import { SejourService} from '../shared/service/sejour.service'

@Component({
  selector: 'app-tableau-sejours',
  templateUrl: './tableau-sejours.component.html',
  styleUrls: ['./tableau-sejours.component.css']
})
export class TableauSejoursComponent implements OnInit {

  listeSejours:Sejour[]
  prixLowCost:number

  constructor(private sejourService:SejourService) { }

  ngOnInit() {
    this.prixLowCost = 1000;
    this.listeSejours = this.sejourService.findAll();
  }

}
