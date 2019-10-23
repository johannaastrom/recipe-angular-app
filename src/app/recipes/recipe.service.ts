import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Small stuff', 'A long descr of the test recipe that contains more than 100 characters & is going to get cut off here and everything after will be gone in the preview but will be shown in the detail view.', 
    //     'https://parade.com/wp-content/uploads/2017/12/efingereditedCheesyDijonSausageCups003-677x1024-1.jpg',
    //     [
    //         new Ingredient('meat', 1),
    //         new Ingredient('salad', 2)
    //     ]),
    //     new Recipe('Soup in bread', 'A description of the test recipe', 
    //     'https://img1.southernliving.timeinc.net/sites/default/files/styles/responsive_etr_gallery_desktop_square/public/image/2009/11/slow-cooker-suppers/hearty-potato-soup-x.jpg?itok=8PeUR8ev',
    //     [
    //         new Ingredient('bread', 1),
    //         new Ingredient('sauce', 3)
    //     ])
    //   ];

    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice(); /* return a copy of the recipes array */
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}