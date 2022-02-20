import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Land } from 'src/app/templates/land';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  homeUrl = 'http://localhost:8080'

  getLands(){
     return this.http.get<Land[]>(this.homeUrl + '/map/all');
  }

  getCurrentPosition(raceName: string){ 
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    headers = headers.set('Accept', 'application/json, text/plain, */*')
    headers = headers.set('Access-Control-Allow-Headers', 'Content-Type')
    return this.http.post<string>(this.homeUrl + '/map/position', JSON.stringify({race: raceName}), {headers: headers, responseType: "text" as 'json'});
  }
  
}
