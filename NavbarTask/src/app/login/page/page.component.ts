import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  login:FormGroup;

  constructor(private navi : Router,private formBuilder:FormBuilder) { 

    this.login=this.formBuilder.group({
      name:['',[Validators.required]]
    })

  }

  ngOnInit(): void {
  }

  navigate(){
    localStorage.setItem("name",this.login.get('name')?.value)
    this.navi.navigate(['routed'])

  }
}
