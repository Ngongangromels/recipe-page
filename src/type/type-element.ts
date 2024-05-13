export interface TRecipe {
    id: string;
    image: any;
    name: string;
    description: string;
    prepTime: string[];
    ingredients: string[];
    instructions: TInstruction[];
    nutrition: TNutrition[];
}



interface TInstruction{
    step: string;
    description: string;
}

interface TNutrition {
    name: string;
    value: number;
    unit: string;
}