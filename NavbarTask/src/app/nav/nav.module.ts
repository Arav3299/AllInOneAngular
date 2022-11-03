import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { HomeComponent } from './shared/home/home.component';
import { PricingComponent } from './shared/pricing/pricing.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { FeaturesComponent } from './shared/features/features.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    HomeComponent,
    PricingComponent,
    DashboardComponent,
    FeaturesComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule
  ]
})
export class NavModule { }
