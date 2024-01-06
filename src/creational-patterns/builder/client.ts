import DrinkBuilder from './builders/DrinkBuilder';
import RecipeBuilder from './builders/RecipeBuilder';
import Director from './director';

const recipeBuilder = new RecipeBuilder();
const drinkBuilder = new DrinkBuilder();
const director = new Director(recipeBuilder);
director.makeLatteWithCaramel();
director.changeBuilder(drinkBuilder);
director.makeLatteWithCaramel();
console.info('Recipe:');
console.table(recipeBuilder.build());
console.info('Drink:');
console.table(drinkBuilder.build());

director.changeBuilder(recipeBuilder);
director.makeEspresso();
director.changeBuilder(drinkBuilder);
director.makeEspresso();
console.info('Recipe:');
console.table(recipeBuilder.build());
console.info('Drink:');
console.table(drinkBuilder.build());
