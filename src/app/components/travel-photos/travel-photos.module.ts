import { TravelPhotosComponent } from './travel-photos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TravelPhotosComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
],
  declarations: [
    TravelPhotosComponent
  ],
  providers: []
})

export class TravelPhotosModule {}
