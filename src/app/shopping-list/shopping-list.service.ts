import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>(); //emits an array of Ingredients
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Potatoes', 10)
    ];
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient); //updated original array
        this.ingredientsChanged.emit(this.ingredients.slice()); //made a copy of the just updated array
        //otherwise getIngredients() would never update, but pas the copy of the OG array
    }

    addManyIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); //... is a spread operator,
        //that means it spreads out all the elements in the array and pushes them as separate items
        //basically as good as looping through and adding one by one
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
}