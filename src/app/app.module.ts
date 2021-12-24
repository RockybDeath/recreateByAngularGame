import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChooseRacePageComponent } from './choose-race-page/choose-race-page.component';
import { RaceComponent } from './choose-race-page/race/race.component';
import { MapOfGameComponent } from './map/mapComponent/map-of-game/map-of-game.component';
import { LandsComponent } from './map/landsComponent/lands/lands.component';
import { RaceService } from './services/raceService/race.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    ChooseRacePageComponent,
    RaceComponent,
    MapOfGameComponent,
    LandsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    CommonModule
  ],
  providers: [RaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
