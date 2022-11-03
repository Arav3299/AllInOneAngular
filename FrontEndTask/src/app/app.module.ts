import { FrontendserviceService } from './frontendservice.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharing/header/header.component';
import { FooterComponent } from './sharing/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TableComponent } from './pages/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateComponent } from './pages/table/update/update/update.component';
import { DialogComponent } from './sharing/dialog/dialog.component';
         
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent, 
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    SigninComponent,
    SignupComponent,
    TableComponent,
    UpdateComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    
  ],
  exports:[NgxSpinnerModule],
  providers: [FrontendserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
