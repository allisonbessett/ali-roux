import { Recipe } from './../recipes';
import { RecipesService } from '../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-recipes-photos',
    templateUrl: './recipe-photos.view.html',
    styleUrls: ['../../../scss/recipes.scss'],
    providers: [RecipesService]
  })

  export class RecipePhotosComponent implements OnInit {
    recipePhotos: Recipe[] = [];
    selectedRecipe: number;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit() {
  this.recipePhotos = this.recipesService.getRecipes();
         // this.route.parent.children
      // .find(r => r.outlet === 'method')
      // .params
      // .subscribe((params: any) => {
      //   if (params.id) { this.selectedRecipe = +params.id; }
      // });
  }


  displayMethod(id: number) {
    this.selectedRecipe = id;
    this.router.navigate(['/recipes', {outlets: {'method': [id]}}]);
}
}
