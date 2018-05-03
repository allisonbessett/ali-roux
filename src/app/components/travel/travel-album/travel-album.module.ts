import { TravelAlbumComponent } from './travel-album.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatC}

const routes: Routes = [
  {
    path: '',
    component: TravelAlbumComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  declarations: [
    TravelAlbumComponent
  ],
  providers: []
})

export class TravelAlbumModule {}
