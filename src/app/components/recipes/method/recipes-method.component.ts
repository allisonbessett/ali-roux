import { RecipesService } from './../recipes.service';
import { RecipesMethod } from './recipes-method';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-recipes-method',
    templateUrl: './recipes-method.view.html',
    styleUrls: ['../../../scss/recipes.scss'],
    providers: [RecipesService]
  })

  export class RecipesMethodComponent implements OnInit {

    selectedRecipe: number;
    currentRecipe: RecipesMethod;

    recipes: RecipesMethod[] = [
      {id: 1, name: 'Iceland', src:
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/geyser-cover.jpg?raw=true'},
      {id: 2, name: 'Scotland', src:
      'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/scotland/cover.jpg'},
      {id: 3, name: 'Scotland2', src:
      'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/scotland/cover.jpg'},
  ];

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit() {
    console.log('onInitRecipe');
    return this.recipes;
    // this.recipes = this.recipeService.getRecipes();
    // this.route.parent.children.find(r => r.outlet === 'desc')
    // .params.subscribe((params: any) => {
    //   if (params.id) {
    //     this.selectedRecipe = +params.id;
    //   }
    // });
  }

  getRecipe() {
    console.log('getRecipe');
    return this.recipes;
  }

  getRecipesById(id) {
    console.log('getByIdRecipe');
    return this.recipes.find(recipes => recipes.id === Number(id));
  }

  showRecipes(clickedRecipe: RecipesMethod) {
    console.log('showRecipe1');
    this.router.navigate(['/recipes', clickedRecipe.id]);
  }
}
