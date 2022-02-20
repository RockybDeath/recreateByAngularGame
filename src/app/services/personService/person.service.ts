import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  homeUrl = 'http://localhost:8080'

  register(name: string, email: string){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    headers = headers.set('Accept', 'application/json, text/plain, */*')
    headers = headers.set('Access-Control-Allow-Headers', 'Content-Type')
    return this.http.post<any>(this.homeUrl + '/person/register', JSON.stringify({name: name, email: email}),{headers: headers});
  }

  sign(token: string){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    headers = headers.set('Accept', 'application/json, text/plain, */*')
    headers = headers.set('Access-Control-Allow-Headers', 'Content-Type')
    return this.http.post<boolean>(this.homeUrl + '/person/register', JSON.stringify({token: token}),{headers: headers});
  }
}
