import { Recipe } from './recipes';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        {id: 1, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/geyser-cover.jpg?raw=true'},
    ];

    getRecipes() {
        return this.recipes;
    }

    getRecipesById(id) {
        return this.recipes.find(recipes => recipes.id === Number(id));
    }
}