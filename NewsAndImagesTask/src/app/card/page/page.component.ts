import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  contents:any;

  constructor(private service : ApiService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){

    this.service.getAllPromotedData().subscribe({
      next : (data)=>{
        this.contents=data;
        console.log(this.contents);
        
      },
      error : (err)=>{
        console.log(err);
      },
      complete : () =>{
        console.log("Subcription Completed");
      }
    })

  }
}
