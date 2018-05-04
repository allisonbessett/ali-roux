import { RecipeService } from './recipes.service';
import { Recipe} from './recipes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component ({
    selector: 'app-recipe',
    templateUrl: './recipe.view.html',
    styleUrls: ['../../scss/recipe.scss']
  })

  export class RecipeComponent implements OnInit {
    recipes: Recipe[] = [];
    selectedRecipe: number;

    constructor (
      private router: Router,
      private route: ActivatedRoute,
      private recipeService: RecipeService
    ) {}

    ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
      this.route.parent.children.find(r => r.outlet === 'desc')
      .params.subscribe((params: any) => {
        if (params.id) {
          this.selectedRecipe = +params.id;
        }
      });
    }

    showDesc(id: number) {
      this.selectedRecipe = id;
      this.router.navigate(['/recipes', {outlets: {'desc': [id]}}]);
    }
  }
