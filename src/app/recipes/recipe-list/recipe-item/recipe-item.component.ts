import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

  onSelectingRecipe() {
    //recipeSelected is an EventEmitter, 
    //the recipe will be emitted then subscribed by recipes.component.ts
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
