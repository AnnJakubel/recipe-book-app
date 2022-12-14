import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Hot Ham Sandwich', 
            'This is simply a test', 
            'https://tinyurl.com/57fjzmm2',
            [
                new Ingredient('Bread', 2),
                new Ingredient('Butter', 1),
                new Ingredient('Ham', 1),
                new Ingredient('Toamto slices', 3),
                new Ingredient('Cheese slice', 1),
                new Ingredient('Ketchup', 1)
            ]),
        new Recipe(
            'Fresh salad', 
            'This is simply a test', 
            'https://tinyurl.com/4zb52fcy',
            [
                new Ingredient('Lettuce', 3),
                new Ingredient('Cucumber', 5),
                new Ingredient('Tomatoes', 7),
                new Ingredient('Olive oil', 2),
                new Ingredient('Salt', 1),
                new Ingredient('Pepper', 1)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
        //slice copies the original array, so we can't access the original from outside
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addManyIngredients(ingredients);
    }
}