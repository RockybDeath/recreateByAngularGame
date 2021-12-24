import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  homeUrl = 'http://localhost:8080'

  getAllPowerOfRace(raceName: string){ 
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    headers = headers.set('Accept', 'application/json, text/plain, */*')
    headers = headers.set('Access-Control-Allow-Headers', 'Content-Type')
    return this.http.post<number>(this.homeUrl + '/hero/allPower', JSON.stringify({race: raceName}), {headers: headers});
  }
}
