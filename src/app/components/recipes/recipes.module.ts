import { RecipeComponent } from './recipes.component';
import { RecipeService } from './recipes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { MatCardModule, MatGridListModule } from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    // MatCardModule,
    // MatGridListModule,
    // BrowserAnimationsModule
  ],
  declarations: [
    RecipeComponent
  ],
  providers: []
})

export class RecipeModule {}
