import { ServicecommonService } from './servicecommon.service';
import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControlDirective } from '@angular/forms';
import * as moment from 'moment';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice';

  date: any;
  form: FormGroup;
  arav: any;
  constructor(private navi: Router, private service: ServicecommonService, @Inject(DOCUMENT) document: Document) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    });



  }

  get name() {
    return this.form.get('name')
  }

  get pass() {
    return this.form.get('pass')
  }
  nav() {
    this.service.get().subscribe(
      (data: any) => {
        console.log(data);

        console.log('hi');
      }, (err) => {
        console.log("bye");

      })
   //this.navi.navigate(['hijore'])
  }


  sva() {

    const date = moment();

    let td = date.format('M/D/YYYY')

    console.log(td);


  }

}
