import { TravelAlbum } from './travel-album';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCard, MatCardModule, MatGridListModule } from '@angular/material';
import { TravelService } from './travel.service';
import { TravelComponent } from './travel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'travel',
    component: TravelComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [
    TravelComponent
  ],
  providers: [
    TravelService
  ]
})

export class TravelModule {}
