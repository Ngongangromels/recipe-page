import { TRecipe } from "../type/type-element";
import Image from '../Image.jpeg'

export async function getRecipeById(recipeId: string): Promise<TRecipe> {
    return {
        id: recipeId,
        image: Image,
        name: "Simple Omelette Recipe",
        description: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
        prepTime: ["Total: Approximately 10 minutes", "Preparation: 5 minutes", "Cooking: 5 minutes"],
        ingredients: ["2-3 large eggs", "Salt, to taste", "Pepper, to taste", "  1 tablespoon of butter or oil", " Optional fillings: cheese, diced vegetables, cooked meats, herbs"],
        instructions : [
            {
                step:"Beat the eggs:",
                description: " In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
               },
               {
               step:"Heat the pan:", 
               description:" Place a non-stick frying pan over medium heat and add butter or oil."
               }, 
               {
                step:"Cook the omelette:",
                description: " Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
               },
               {
               step:"Add fillings (optional):", 
               description:" When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
               },
               {
               step:"Fold and serve:", 
               description: " As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
               },
               {
                step:"Enjoy:",
                description: " Serve hot, with additional salt and pepper if needed."
               }
        ],
        nutrition : [
            {
                name: "Calories",
                value: 277,
                unit: "Kcal",
            },
            {
                name: "Carbs",
                value: 0,
                unit: "g",
            },
            {
                name: "Protein",
                value: 20,
                unit: "g",
            },
            {
                name: "Fat",
                value: 20,
                unit: "g",
            },
        ],

    }
}