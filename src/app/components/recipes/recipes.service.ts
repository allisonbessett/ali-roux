import { Recipe } from './recipes';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipesService {

  private recipe: Recipe[] = [
      {id: 1, name: 'Beet Muffins', src:
      'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/recipes/beet-muffin-cover.jpg',
      photos: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/recipes/beet-muffin-batter.jpg?raw=true',
      // intro: 'Beets are my favorite vegetable. They offer such a unique and wonderful flavor to these muffins. +=
      // These don’t have any refined sugar and they’re vegan if using an egg replacer!
      // They’re sweetened with maple syrup, mashed banana, and orange juice.
      // The fruits give the muffins a rich and full flavor.
      // After these little beauties have softened, you can chop them in a food processor if you’d rather not hand mash them.'
    }
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipe;
  }

  getRecipeByID(id) {
    return this.recipe.find(recipe => recipe.id === Number(id));
  }
}
