import { StudentListComponent } from './student-list/student-list.component';
 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegisterComponent } from './student-register/student-register.component';

const routes: Routes = [
  {path:'registeration',component:StudentRegisterComponent},{path:'listing',component:StudentRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [StudentRegisterComponent,StudentListComponent]