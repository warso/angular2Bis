import { Component, OnInit, Input } from '@angular/core';
import { Sejour } from '../shared/domain/sejour';
import { SejourService} from '../shared/service/sejour.service'

@Component({
  selector: 'app-carousel-sejours',
  templateUrl: './carousel-sejours.component.html',
  styleUrls: ['./carousel-sejours.component.css']
})
export class CarouselSejoursComponent implements OnInit {

    @Input() listeSejours:Sejour[]
    sejourCourant:Sejour
    intervalCmp: any;
    index = 0;

    constructor(private sejourService:SejourService) { }


    ngOnInit() {
        this.listeSejours = this.sejourService.findAll();
        this.start();
    }

    start() {

        this.sejourCourant = this.listeSejours[this.index];
        this.intervalCmp = setInterval(() => {
            this.index++;
            if (this.index === this.listeSejours.length) {
                this.index = 0;
            }
            this.sejourCourant = this.listeSejours[this.index];
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalCmp);
    }
}
