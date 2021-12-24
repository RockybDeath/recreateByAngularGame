import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resources } from 'src/app/templates/resources';

@Injectable({
  providedIn: 'root'
})
export class FractionService {

  constructor(private http: HttpClient) { }

  homeUrl = 'http://localhost:8080'

  getAllResourcesOfFraction(raceName: string){ 
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    headers = headers.set('Accept', 'application/json, text/plain, */*')
    headers = headers.set('Access-Control-Allow-Headers', 'Content-Type')
    return this.http.post<Resources>(this.homeUrl + '/fraction/getAllResources', JSON.stringify({race: raceName}), {headers: headers});
  }
}
