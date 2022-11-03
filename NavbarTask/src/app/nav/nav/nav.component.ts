import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  admin=[
    {name:"Home",link:"home"},
    {name:"Dashboard",link:"dashboard"},
    {name:"Pricing",link:"pricing"},
    {name:"Features",link:"features"}
  ]

  user=[
    {name:"Home",link:"home"},
    {name:"Pricing",link:"pricing"},
    {name:"Features",link:"features"}
  ]

  
  name:any;
  final:any;
  constructor(private navi : Router) { 

  }

  ngOnInit(): void {

    this.name=localStorage.getItem("name");
    console.log(this.name);
    
    if(this.name=="admin"){
      this.final=this.admin
    }else if(this.name=="user"){
      // alert('user')
      this.final=this.user;
    }else{
      alert("please enter proper name")
      localStorage.removeItem("name")
      this.navi.navigate([''])
    }

  }

}
