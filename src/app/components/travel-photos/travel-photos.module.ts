import { MatGridListModule } from '@angular/material/grid-list';
import { TravelPhotosComponent } from './travel-photos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCard, MatCardModule } from '@angular/material';

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
    MatGridListModule,
    MatCardModule
],
  declarations: [
    TravelPhotosComponent
  ],
  providers: []
})

export class TravelPhotosModule {}
