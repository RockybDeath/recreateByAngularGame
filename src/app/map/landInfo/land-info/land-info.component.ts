import { Component, Input, OnInit, Output } from '@angular/core';
import { Land } from 'src/app/templates/land';
import { EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-land-info',
  templateUrl: './land-info.component.html',
  styleUrls: ['./land-info.component.scss']
})
export class LandInfoComponent implements OnInit {

  constructor() { }

  @Input()
  index = 1;

  @Input()
  land: Land | undefined;

  @Output()
  removeTerritoryFromList = new EventEmitter<string>()

  ngOnInit(): void {
  }

}
