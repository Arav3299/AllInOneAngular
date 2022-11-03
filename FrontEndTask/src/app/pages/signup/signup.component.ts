 
import { FrontendserviceService } from './../../frontendservice.service';
import { RouterModule } from '@angular/router';
import { User } from './../../User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner/public_api';
import { TableComponent } from '../table/table.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emp:any;
  user: User = new User("", "", 0, "", "");
  signupForm: FormGroup;
  // router: any;
  constructor(private arav : Router) {

  
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),                       //building the form ,
      email: new FormControl('', [Validators.required, Validators.email]),
      number: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
      cpass: new FormControl('', [Validators.required]),
      //injecting form control
    });
  }
  ngOnInit(): void {
  
   
  }
   

  get name() {
    return this.signupForm.get('name');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get number() {
    return this.signupForm.get('number');
  }
  get pass(){
    return this.signupForm.get('pass');
  }
  get cpass(){
    return this.signupForm.get('cpass');
  }
  navigate(){
    // alert()
    this.arav.navigateByUrl('signin')
  }

  submit() {

     
    console.log(this.signupForm.value);

  }

   

}

