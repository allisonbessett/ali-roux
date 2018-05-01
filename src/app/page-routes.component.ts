import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
// import { PageNotFoundComponent } from './not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './components/landing/landing.module#LandingModule',
  },
//   {
//       path: '**',
//       component: PageNotFoundComponent
//   }
];
