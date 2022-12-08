import { Component, ViewChild, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;


  constructor() {}

  ngOnInit() {
  }

  onAddIngredient() {
    const ingName = this.nameInput.nativeElement.value; //if I change variables, I'll use 'let'
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient =  new Ingredient(ingName, ingAmount);

    this.ingredientAdded.emit(newIngredient);
  }
}
