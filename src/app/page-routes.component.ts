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
  {
    path: 'travel',
    loadChildren: './components/travel/travel.module#TravelModule',
  },
  // {
  //   path: 'recipes',
  //   loadChildren: './components/recipes/recipes.module#RecipesModule'
  // },
  // {
  //   path: 'about',
  //   loadChildren: './components/about/about.module#AboutModule'
  // },
  {
    path: 'travel/:id',
    loadChildren: './components/photos/photos.module#PhotosModule'
  }
//   {
//       path: '**',
//       component: PageNotFoundComponent
//   }
];
