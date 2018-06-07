import { RecipesMethodComponent } from './method/recipes-method.component';
// import { BeetMuffinComponent } from './method/beet-muffins/beet-muffins-recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCard, MatCardModule, MatGridListModule } from '@angular/material';
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
    MatGridListModule
  ],
  declarations: [
    RecipesComponent,
    RecipesMethodComponent,
    // BeetMuffinComponent,
  ],
  providers: [
    RecipesService
  ]
})

export class RecipesModule {}
