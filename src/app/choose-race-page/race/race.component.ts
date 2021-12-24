import { Component, Input, OnInit } from '@angular/core';
import { Race } from 'src/app/templates/race';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  @Input()
  race!: Race;

  @Input()
  index = 1;

  visableDescription = false;

  imgForRace = '';

  constructor() { }

  ngOnInit(): void {
    this.imgForRace = '../../../assets/img/' + this.race.name + '.jpg';
  }

  goToMapAndSaveRace(){

  }

}
