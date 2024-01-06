import Recipe from '../entities/recipe';
import IBuilder from './IBuilder';

export default class RecipeBuilder implements IBuilder<Recipe> {
  private recipe: Recipe = {} as Recipe;

  reset(): IBuilder<Recipe> {
    this.recipe = {} as Recipe;
    return this;
  }

  buildBase(name: string, ingredients: string[]): IBuilder<Recipe> {
    this.recipe = {
      name: name,
      ingredients: ingredients,
      steps: [],
    };
    return this;
  }

  addAdditives(additives: string[]): IBuilder<Recipe> {
    this.recipe.ingredients.push(...additives);
    this.recipe.steps.push(`Add additives: ${additives.join(', ')}`);
    return this;
  }

  setTemperature(temperature: number): IBuilder<Recipe> {
    this.recipe.steps.push(`Set temperature to ${temperature}`);
    return this;
  }

  build(): Recipe {
    return this.recipe;
  }
}
