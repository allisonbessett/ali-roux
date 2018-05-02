import { TravelComponent } from './travel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: TravelComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  declarations: [
    TravelComponent
  ],
  providers: []
})

export class TravelModule {}
