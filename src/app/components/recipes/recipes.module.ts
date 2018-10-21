import { RecipeMethodComponent } from './recipe-method/recipe-method.component';
import { RecipePhotosComponent } from './recipe-photos/recipe-photos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { RecipesComponent } from './recipes.component';
import { RecipesService } from './recipes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  declarations: [
    RecipesComponent,
    RecipePhotosComponent,
    RecipeMethodComponent
  ],
  providers: [
    RecipesService
  ]
})

export class RecipesModule {}
