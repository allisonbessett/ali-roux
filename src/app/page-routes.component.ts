import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { TravelComponent } from './components/travel/travel.component';
import { TravelPhotosComponent } from './components/travel-photos/travel-photos.component';
// import { PageNotFoundComponent } from './not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
  component: LandingComponent,
  },
  {
    path: 'travel',
   component: TravelComponent,
   children: [
     {
       path: ':id', component: TravelPhotosComponent,
     }
   ]
  },
  // {
  //   path: 'recipes',
  //   loadChildren: './components/recipes/recipes.module#RecipesModule'
  // },
  // {
  //   path: 'about',
  //   loadChildren: './components/about/about.module#AboutModule'
  // },
  // {
  //   path: 'travel/:id',
  //   loadChildren: './components/travel-photos/travel-photos.module#TravelPhotosModule'
  // }
//   {
//       path: '**',
//       component: PageNotFoundComponent
//   }
];
