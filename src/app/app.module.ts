import { AboutMeComponent } from './components/about/about-me.component';
import { RecipesMethodComponent } from './components/recipes/method/recipes-method.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { TravelAlbumComponent } from './components/travel/travel-album/travel-album.component';
import { TravelPhotosComponent } from './components/travel-photos/travel-photos.component';
import { TravelComponent } from './components/travel/travel.component';
import { LandingComponent } from './components/landing/landing.component';
import { RoutingModule } from './page-routes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TravelComponent,
    TravelPhotosComponent,
    TravelAlbumComponent,
    RecipesComponent,
    RecipesMethodComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

