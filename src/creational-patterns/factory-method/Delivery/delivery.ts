import IPackage from '../Package/IPackage';

export interface ICreatePackageParams {
  width: number;
  height: number;
  depth: number;
  address: string;
  weight: number;
  contents: string[];
}
export default abstract class Delivery {
  public readonly packages: IPackage[] = [];

  constructor(
    public address: string,
    public items: {
      name: string;
      width: number;
      height: number;
      depth: number;
      weight: number;
    }[],
  ) {}

  processDelivery(): void {
    const packages = this.splitToPackages();
    packages.forEach(pkg => {
      const packageInstance = this.createPackage({
        width: pkg.width,
        height: pkg.height,
        depth: pkg.depth,
        address: this.address,
        weight: pkg.weight,
        contents: pkg.contents,
      });
      this.packages.push(packageInstance);
      packageInstance.sendToServiceProvider();
      packageInstance.printLabel();
    });
  }

  abstract splitToPackages(): ICreatePackageParams[];

  abstract createPackage({
    width,
    height,
    depth,
    address,
    weight,
    contents,
  }: ICreatePackageParams): IPackage;
}
