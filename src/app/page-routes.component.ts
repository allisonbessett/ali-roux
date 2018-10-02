import { RecipesMethodComponent } from './components/recipes/method/recipes-method.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { TravelAlbumComponent } from './components/travel/travel-album/travel-album.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { TravelComponent } from './components/travel/travel.component';
import { TravelPhotosComponent } from './components/travel-photos/travel-photos.component';
import { AboutMeComponent } from './components/about/about-me.component';
// import { PageNotFoundComponent } from './not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
  component: LandingComponent,
  },

  {
    path: 'travel',
   component: TravelComponent,
  // },
   children: [
     {
       path: 'travelAlbum',
       component: TravelAlbumComponent,
       outlet: 'album'
     },
     {
       path: ':id',
       component: TravelPhotosComponent,
       outlet: 'photo'
     }
   ],
  },

  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: 'method',
        component: RecipesMethodComponent,
        outlet: 'method'
      }
    ]
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
//   {
//       path: '**',
//       component: PageNotFoundComponent
//   }
];

@NgModule( {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {}
