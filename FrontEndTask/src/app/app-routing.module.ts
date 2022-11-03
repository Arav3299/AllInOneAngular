import { UpdateComponent } from './pages/table/update/update/update.component';
import { TableComponent } from './pages/table/table.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'signup',component:SignupComponent},
  // {path: '/signup/signin', redirectTo: 'signin',pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'table',component:TableComponent},
  {path:'update/:id',component:UpdateComponent}
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
