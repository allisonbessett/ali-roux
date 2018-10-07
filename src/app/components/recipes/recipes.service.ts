import { Recipes } from './recipes';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipesService {

  private recipes: Recipes[] = [
      {id: 1, name: 'Beet Muffins', src:
      'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/recipes/beet-muffin-cover.jpg',
      photos: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/recipes/beet-muffin-batter.jpg?raw=true'}
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipeByID(id) {
    return this.recipes.find(recipe => recipe.id === Number(id));
  }
}
