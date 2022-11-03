import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {

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
