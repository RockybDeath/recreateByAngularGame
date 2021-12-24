import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChooseRacePageComponent } from './choose-race-page/choose-race-page.component';
import { MapOfGameComponent } from './map/mapComponent/map-of-game/map-of-game.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'mainPage', component: MainPageComponent},
  {path: 'chooseRace', component: ChooseRacePageComponent},
  {path: 'mapOfGame', component: MapOfGameComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
