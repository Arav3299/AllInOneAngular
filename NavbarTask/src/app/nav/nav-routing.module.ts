import { FeaturesComponent } from './shared/features/features.component';
import { PricingComponent } from './shared/pricing/pricing.component';
import { NavComponent } from './nav/nav.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

const routes: Routes = [
  { path:"welcome",component:NavComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"pricing",component:PricingComponent},
    {path:"features",component:FeaturesComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
