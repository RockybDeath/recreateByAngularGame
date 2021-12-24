import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RaceService } from '../services/raceService/race.service';
import { UtilService } from '../services/utilService/util.service';
import { CurrentStateOfSystem } from '../templates/currentStateOfSystem';
import { Race } from '../templates/race';

@Component({
  selector: 'app-choose-race-page',
  templateUrl: './choose-race-page.component.html',
  styleUrls: ['./choose-race-page.component.scss']
})
export class ChooseRacePageComponent implements OnInit {

  races: Race[] = [];

  constructor(private raceService: RaceService, private router: Router, private utilService: UtilService, private currentStateOfSystem: CurrentStateOfSystem) { }

  ngOnInit(): void {
    this.raceService.getRaces().subscribe((data) => {
      this.races = data;
    })
  }

  goToMapAndSave(race: Race){
    this.currentStateOfSystem.race = race;
    // this.utilService.setCurrentStateOfSystem(this.currentStateOfSystem).then(() =>{
    //   this.router.navigate(['mapOfGame']);
    // });
    this.utilService.setCurrentStateOfSystem(this.currentStateOfSystem);
    this.router.navigate(['mapOfGame']);
  }

}
