import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Army } from 'src/app/templates/army';

@Injectable({
  providedIn: 'root'
})
export class ArmyService {

  constructor(private http: HttpClient) { }

  homeUrl = 'http://localhost:8080'

  getArmyOfHero(leaderName: string){ 
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    headers = headers.set('Accept', 'application/json, text/plain, */*')
    headers = headers.set('Access-Control-Allow-Headers', 'Content-Type')
    return this.http.post<Army>(this.homeUrl + '/army/hero', JSON.stringify({leader: leaderName}), {headers: headers});
  }
}
