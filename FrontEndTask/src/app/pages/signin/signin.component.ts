import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {

  signinForm:FormGroup ;
  constructor() {
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),                        
      pass: new FormControl('', [Validators.required]),
   })
  }
  get email(){
    return this.signinForm.get('email');
  }
  signin(){
    console.log(this.signinForm.value)
    this.signinForm.reset();
  } 
}

