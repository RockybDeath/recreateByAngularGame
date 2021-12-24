import { Component, OnInit } from '@angular/core';
import { ArmyService } from 'src/app/services/armyService/army.service';
import { FractionService } from 'src/app/services/fractionService/fraction.service';
import { HeroService } from 'src/app/services/heroService/hero.service';
import { MapService } from 'src/app/services/mapService/map.service';
import { RaceService } from 'src/app/services/raceService/race.service';
import { UtilService } from 'src/app/services/utilService/util.service';
import { Army } from 'src/app/templates/army';
import { CurrentStateOfSystem } from 'src/app/templates/currentStateOfSystem';
import { Land } from 'src/app/templates/land';
import { Resources } from 'src/app/templates/resources';

@Component({
  selector: 'app-map-of-game',
  templateUrl: './map-of-game.component.html',
  styleUrls: ['./map-of-game.component.scss']
})
export class MapOfGameComponent implements OnInit {

  lands: Land[] = [];

  resources!: Resources;

  army!: Army;

  allPower!: number;

  popupIndex = -1;

  constructor(private mapService: MapService, private heroservice: HeroService, private armyService: ArmyService,private fractionService: FractionService, public currentStateOfSystem: CurrentStateOfSystem, private utilService: UtilService) { }

  ngOnInit(): void {
    this.mapService.getLands().subscribe((data) => {
      this.lands = data;
      this.mapService.getCurrentPosition(this.currentStateOfSystem.race.name).subscribe((data) => {
        this.currentStateOfSystem.currentLandId = data;
      })
    })
    this.fractionService.getAllResourcesOfFraction(this.currentStateOfSystem.race.name).subscribe((data) =>{
      this.resources = data;
    })
    this.armyService.getArmyOfHero(this.currentStateOfSystem.race.leader.name).subscribe((data) => {
      this.army = data;
    })
    this.heroservice.getAllPowerOfRace(this.currentStateOfSystem.race.name).subscribe((data) => {
      this.allPower = data;
    })
  }

  onUpdatePopup(newPopupIndex : number){
    if(newPopupIndex === this.popupIndex){
      this.popupIndex = -1;
    } else {
      this.popupIndex = newPopupIndex;
    }
  }

}
