import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    //.subscribe listens to recipeSelected event, 
    //the event itself is emitted from the recipe-item.component.ts
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
