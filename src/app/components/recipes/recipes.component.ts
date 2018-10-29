import { RecipesService } from './recipes.service';
import { Component } from '@angular/core';

@Component ({
    selector: 'app-recipes',
    templateUrl: './recipes.view.html',
    styleUrls: ['../../scss/recipes.scss'],
    providers: [RecipesService]
  })

  export class RecipesComponent {
    showMethod = true;
  }
