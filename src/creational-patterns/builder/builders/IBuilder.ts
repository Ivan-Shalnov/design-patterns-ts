export default interface IBuilder<T> {
  reset(): IBuilder<T>;
  buildBase(name: string, ingredients: string[]): IBuilder<T>;
  addAdditives(additives: string[]): IBuilder<T>;
  setTemperature(temperature: number): IBuilder<T>;
  build(): T;
}
