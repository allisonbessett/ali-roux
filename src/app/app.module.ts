import { LandingModule } from './components/landing/landing.module';
import { TravelModule } from './components/travel/travel.module';
import { RecipesModule } from './components/recipes/recipes.module';
import { AboutMeModule } from './components/about/about-me.module';
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
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatGridListModule,
    MatCardModule,
    AboutMeModule,
    LandingModule,
    TravelModule,
    RecipesModule,
    AboutMeModule,
  ],
  exports: [RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

