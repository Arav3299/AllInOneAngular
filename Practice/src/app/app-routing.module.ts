import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HijoreComponent } from './hijore/hijore.component';

const routes: Routes = [
  {path:"hijore",component:HijoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
