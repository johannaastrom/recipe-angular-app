import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Pear', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngedient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); /* instead of for loop */
        this.ingredientsChanged.next(this.ingredients.slice());

        // for (let ingredient of ingredients) {
        //     this.addIngedient(ingredient);
        // }
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
}