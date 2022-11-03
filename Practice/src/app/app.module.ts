import { HttpClientModule } from '@angular/common/http';
import { ServicecommonService } from './servicecommon.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoreComponent } from './hijore/hijore.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HijoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicecommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
