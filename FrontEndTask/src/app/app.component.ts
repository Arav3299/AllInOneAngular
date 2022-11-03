import { NgxSpinnerService } from 'ngx-spinner/public_api';
import { Component, OnInit } from '@angular/core';


interface NgxSpinnerConfig {
  type?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Mumbai';
  
}
