import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sejour } from "../shared/domain/sejour";
import { SejourService} from '../shared/service/sejour.service'

@Component({
  selector: 'app-editer-sejour',
  templateUrl: './editer-sejour.component.html',
  styleUrls: ['./editer-sejour.component.css']
})
export class EditerSejourComponent implements OnInit {

  model:Sejour

  constructor(private route:ActivatedRoute, private sejourService:SejourService, private router: Router) { }

  ngOnInit() {
    this.model = this.sejourService.findById(this.route.snapshot.params['id']);
  }

  valider() {
   this.sejourService.save(this.model)
   this.router.navigate(['/sejours']);
  }

}
