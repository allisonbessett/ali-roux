import { BeetMuffinComponent } from './method/beet-muffins/beet-muffins-recipe.component';
import { RecipeComponent } from './recipes.component';
import { RecipeService } from './recipes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    RecipeComponent,
    BeetMuffinComponent
  ],
  providers: []
})

export class RecipeModule {}
