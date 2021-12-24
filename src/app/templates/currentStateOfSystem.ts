import { Inject, Injectable, OnInit } from "@angular/core";
import { Race } from "./race";

@Injectable({
    providedIn: 'root'
})
export class CurrentStateOfSystem{
    race!: Race
    currentLandId = 1
    
    constructor(){
        if (localStorage.getItem('currentStateOfSystem')) {
            const currentState = JSON.parse(localStorage.getItem('currentStateOfSystem')!);
            for (let field in currentState) {
                if(field as keyof CurrentStateOfSystem){
                    this[field as keyof CurrentStateOfSystem] = currentState[field];
                }
            }
        }
    }
}