import { TravelPhotosModule } from './components/travel-photos/travel-photos.module';
import { LandingModule } from './components/landing/landing.module';
import { TravelModule } from './components/travel/travel.module';
import { RecipesModule } from './components/recipes/recipes.module';
import { AboutMeModule } from './components/about/about-me.module';
// import { AboutMeComponent } from './components/about/about-me.component';
// import { RecipesMethodComponent } from './components/recipes/method/recipes-method.component';
// import { RecipesComponent } from './components/recipes/recipes.component';
// import { TravelAlbumComponent } from './components/travel/travel-album/travel-album.component';
// import { TravelPhotosComponent } from './components/travel-photos/travel-photos.component';
// import { TravelComponent } from './components/travel/travel.component';
// import { LandingComponent } from './components/landing/landing.component';
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
    // LandingComponent,
    // TravelComponent,
    // TravelPhotosComponent,
    // TravelAlbumComponent,
    // RecipesComponent,
    // RecipesMethodComponent,
    // AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatGridListModule,
    MatCardModule,
    AboutMeModule,
    LandingModule,
    TravelModule,
    TravelPhotosModule,
    // TravelAlbumModule,
    RecipesModule,
    // RecipesMethodModule,
    AboutMeModule
  ],
  exports: [RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

