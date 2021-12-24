import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOfGameComponent } from './map-of-game.component';

describe('MapOfGameComponent', () => {
  let component: MapOfGameComponent;
  let fixture: ComponentFixture<MapOfGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapOfGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOfGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
