import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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

  choseLands: Land[] = [];

  loadingFromServer = false;

  resources!: Resources;

  army!: Army;

  allPower!: number;

  popupIndex = -1;

  currentIdIndex = 1;

  constructor(private mapService: MapService, private heroservice: HeroService, private armyService: ArmyService,private fractionService: FractionService, public currentStateOfSystem: CurrentStateOfSystem, private utilService: UtilService) { }

  ngOnInit(): void {
    this.loadingFromServer = true;
    this.mapService.getLands().subscribe((data) => {
      this.lands = data;
      this.mapService.getCurrentPosition(this.currentStateOfSystem.race.name).subscribe((data) => {
        this.currentStateOfSystem.currentLandName = data;
        this.choseLands = this.lands.filter((land) => land.name === this.currentStateOfSystem.currentLandName)
        this.currentIdIndex = this.lands.indexOf(this.choseLands[0]);
        this.fractionService.getAllResourcesOfFraction(this.currentStateOfSystem.race.name).subscribe((data) =>{
          this.resources = data;
          this.armyService.getArmyOfHero(this.currentStateOfSystem.race.leader.name).subscribe((data) => {
            this.army = data;
            this.heroservice.getAllPowerOfRace(this.currentStateOfSystem.race.name).subscribe((data) => {
              this.allPower = data;
              this.loadingFromServer = false;
            })
          })
        })
      })
    })
  }

  onUpdatePopup(newPopupIndex : number){
    if(newPopupIndex === this.popupIndex){
      this.popupIndex = -1;
    } else {
      this.popupIndex = newPopupIndex;
      let coords = document.getElementById("popupWindow"+newPopupIndex)?.getBoundingClientRect();
      let offsetTop = document.getElementById("popupWindow"+newPopupIndex)?.offsetTop;
      if(coords?.top !== undefined && offsetTop !== undefined && coords.top > (window.innerHeight/2)){
        document.getElementById("popupWindowShow"+newPopupIndex)?.style.setProperty("top", (offsetTop - 23 - 200) + "px");
      }
    }
  }

  addTerritoryToList(landName: string){
    console.log(landName) 
    if(this.choseLands[0].name !== this.currentStateOfSystem.currentLandName){
      this.choseLands = this.choseLands.filter((land) => land.name !== landName);
      this.choseLands[0] = this.lands.filter((land) => (land.name === this.currentStateOfSystem.currentLandName))[0];
    } else {
      if(this.choseLands.filter((land) => land.name === landName).length === 0){
        this.choseLands.push(this.lands.filter((land) => (land.name === landName))[0]);
      }
    }
  }

  removeTerritoryFromList(landName: string){
    this.choseLands = this.choseLands.filter((land) => (land.name !== landName))
  }

}
