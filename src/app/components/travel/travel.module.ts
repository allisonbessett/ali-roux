import { TravelComponent } from './travel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule, MatGridListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TravelService}

const routes: Routes = [
  {
    path: '',
    component: TravelComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  declarations: [
    TravelComponent
  ],
  providers: []
})

export class TravelModule {}
