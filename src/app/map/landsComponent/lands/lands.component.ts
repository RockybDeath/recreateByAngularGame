import { Component, Input, OnInit, OnChanges, SimpleChanges, Output} from '@angular/core';
import { Land } from 'src/app/templates/land';
import { EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-lands',
  templateUrl: './lands.component.html',
  styleUrls: ['./lands.component.scss']
})
export class LandsComponent implements OnInit, OnChanges {

  @Input()
  land!: Land;

  @Input()
  index = 1;

  @Input()
  popup: any
  @Output()
  popupChange = new EventEmitter<number>()

  @Input()
  currentId = 1;
  @Output()
  currentIdChange = new EventEmitter<number>();

  @Input()
  raceName = ''

  @Input()
  fractionName = ''

  countGarrison = 1;

  act = false;
  sim = false;
  move = false;
  attack = false;

  constructor() { }

  ngOnInit(): void {
    this.setColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.setColor();
  }

  setColor(){
    this.act = false;
    if(this.index == this.currentId) this.act = true;
    this.sim = false;
    if(this.raceName == this.land.race.name) this.sim = true;
    this.move = false;
    if(Math.abs(this.currentId - this.index) >= 1 && Math.abs(this.currentId - this.index) < 3 && this.land.race.fraction.name == this.fractionName) this.move = true;
    this.attack = false;
    if(Math.abs(this.currentId - this.index) >= 1 && Math.abs(this.currentId - this.index) < 3 && this.land.race.fraction.name != this.fractionName) this.attack = true;
  }

  changeCurrent(){
    this.currentIdChange.emit(this.index);
    this.popupChange.emit(this.index)
  }

}
