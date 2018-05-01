import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  declarations: [
    LandingComponent
  ],
  providers: []
})

export class LandingModule {}
