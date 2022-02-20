import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../services/personService/person.service';
import { UtilService } from '../services/utilService/util.service';
import { CurrentStateOfSystem } from '../templates/currentStateOfSystem';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private personService: PersonService, private currentStateOfSystem: CurrentStateOfSystem, private utilService: UtilService) { }

  email = new FormControl('', [Validators.required, Validators.email])

  username = new FormControl('', [Validators.required])

  beginAdventure = false;

  ngOnInit(): void {
    if(this.currentStateOfSystem.token){
      this.beginAdventure = true;
    }
  }

  goToMain(){
    this.router.navigate(['mainPage'])
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageUsername(){
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
    // return this.username.hasError('email') ? 'Not a valid email' : '';
  }

  register(){
    if(this.email.valid && this.username.valid){
      this.personService.register(this.username.value, this.email.value).subscribe((data) => {
        if(data && data.result){
          this.beginAdventure = data.result;
        if(data.result){
          this.currentStateOfSystem.token = data.token;
          this.utilService.setCurrentStateOfSystem(this.currentStateOfSystem);
        }
        }
      })
    }
  }

  sign(){
    if(this.email.valid && this.username.valid){
      this.personService.sign(this.currentStateOfSystem.token).subscribe((data) => {
        this.beginAdventure = data;
      })
    }
  }

}
