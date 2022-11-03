import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardRoutingModule } from './card-routing.module';
import { PageComponent } from './page/page.component';
import { NewspageComponent } from './newspage/newspage.component';

@NgModule({
  declarations: [
    PageComponent,
    NewspageComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    FormsModule
  ]
})
export class CardModule { }
