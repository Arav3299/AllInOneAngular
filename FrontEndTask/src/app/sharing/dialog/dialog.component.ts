import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor( private navi : Router) { }

  ngOnInit(): void {
  }

  bye(){
      this.navi.navigate(['table']);

  }

}
