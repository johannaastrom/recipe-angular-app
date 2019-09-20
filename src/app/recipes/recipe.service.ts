import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Small stuff', 'A description of the test recipe', 
        'https://parade.com/wp-content/uploads/2017/12/efingereditedCheesyDijonSausageCups003-677x1024-1.jpg',
        [
            new Ingredient('meat', 1),
            new Ingredient('salad', 2)
        ]),
        new Recipe('Soup in bread', 'A description of the test recipe', 
        'https://img1.southernliving.timeinc.net/sites/default/files/styles/responsive_etr_gallery_desktop_square/public/image/2009/11/slow-cooker-suppers/hearty-potato-soup-x.jpg?itok=8PeUR8ev',
        [
            new Ingredient('bread', 1),
            new Ingredient('sauce', 3)
        ])
      ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice(); /* return a copy of the recipes array */
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}