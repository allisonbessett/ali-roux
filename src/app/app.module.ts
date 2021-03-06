import { CommonModule } from '@angular/common';
import { LandingModule } from './components/landing/landing.module';
import { TravelModule } from './components/travel/travel.module';
import { RecipesModule } from './components/recipes/recipes.module';
import { AboutMeModule } from './components/about/about-me.module';
import { RoutingModule } from './page-routes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AboutMeModule,
    LandingModule,
    TravelModule,
    RecipesModule,
    AboutMeModule,
    BrowserModule,
    RoutingModule,
    MatGridListModule,
    MatCardModule,
    CommonModule
  ],
  exports: [RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

