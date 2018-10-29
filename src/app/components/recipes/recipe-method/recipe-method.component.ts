import { Recipe } from './../recipes';
import { RecipesService } from '../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-recipes-method',
    templateUrl: './recipe-method.view.html',
    styleUrls: ['../../../scss/recipes.scss'],
    providers: [RecipesService]
  })

  export class RecipeMethodComponent implements OnInit {
    currentRecipe: Recipe;

  constructor (
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: {id: string}) => {
      this.currentRecipe = this.recipesService.getRecipeByID(params.id);
    });
  }
}
