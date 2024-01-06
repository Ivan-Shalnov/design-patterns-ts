import Drink from '../entities/drink';
import IBuilder from './IBuilder';

export default class DrinkBuilder implements IBuilder<Drink> {
  private drink: Drink = {} as Drink;

  reset(): IBuilder<Drink> {
    this.drink = {} as Drink;
    return this;
  }

  buildBase(name: string, ingredients: string[]): IBuilder<Drink> {
    this.drink = {
      name: name,
      ingredients: ingredients,
      temperature: 0,
    };
    return this;
  }

  addAdditives(additives: string[]): IBuilder<Drink> {
    this.drink.ingredients.push(...additives);
    return this;
  }

  setTemperature(temperature: number): IBuilder<Drink> {
    this.drink.temperature = temperature;
    return this;
  }

  build() {
    return this.drink;
  }
}
