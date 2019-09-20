import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();   
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Pear', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngedient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); /* instead of for loop */
        this.ingredientsChanged.emit(this.ingredients.slice());

        // for (let ingredient of ingredients) {
        //     this.addIngedient(ingredient);
        // }
    }
}