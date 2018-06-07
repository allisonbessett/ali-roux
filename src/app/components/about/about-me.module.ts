import { AboutMeComponent } from './about-me.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'about',
    component: AboutMeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  declarations: [
    AboutMeComponent
  ],
  providers: []
})

export class AboutMeModule {}
