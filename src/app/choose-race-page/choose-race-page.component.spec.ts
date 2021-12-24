import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRacePageComponent } from './choose-race-page.component';

describe('ChooseRacePageComponent', () => {
  let component: ChooseRacePageComponent;
  let fixture: ComponentFixture<ChooseRacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseRacePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseRacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
