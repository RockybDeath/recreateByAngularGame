import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Race } from 'src/app/templates/race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  homeUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getRaces(){
    return this.http.get<Race[]>(this.homeUrl + '/hero/races');
  }

}
