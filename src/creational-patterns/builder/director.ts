import IBuilder from './builders/IBuilder';

export default class Director {
  constructor(private builder: IBuilder<unknown>) {}

  changeBuilder(builder: IBuilder<unknown>): void {
    this.builder = builder;
  }

  makeLatteWithCaramel(): unknown {
    return this.builder
      .reset()
      .buildBase('Latte', ['Coffee', 'Milk', 'Sugar'])
      .addAdditives(['Caramel'])
      .setTemperature(60)
      .build();
  }

  makeBlackTeaWithMint(): unknown {
    return this.builder
      .reset()
      .buildBase('Black tea', ['Tea', 'Mint'])
      .setTemperature(100)
      .build();
  }

  makeEspresso(): unknown {
    return this.builder
      .reset()
      .buildBase('Espresso', ['Coffee'])
      .setTemperature(90)
      .build();
  }
}
