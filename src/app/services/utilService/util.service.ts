import { Injectable } from '@angular/core';
import { CurrentStateOfSystem } from 'src/app/templates/currentStateOfSystem';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  // async setCurrentStateOfSystem(currentStateOfSystem: any){
  //   null;
  //   return localStorage.setItem('currentStateOfSystem', JSON.stringify(currentStateOfSystem))
  // }

  setCurrentStateOfSystem(currentStateOfSystem: any){
    localStorage.setItem('currentStateOfSystem', JSON.stringify(currentStateOfSystem))
  }

  getCurrentStateOfSystem(): any{
    if(localStorage.getItem('currentStateOfSystem')){
      let currentStateOfSystem = JSON.parse(localStorage.getItem('currentStateOfSystem')!);
      return currentStateOfSystem;
    }
    return null;
  }
}
