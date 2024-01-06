import { IPackage } from '../Package/IPackage';
import { DHLPackage } from '../Package/dhl-package';
import { Delivery, ICreatePackageParams } from './delivery';

export class DHLDelivery extends Delivery {
  splitToPackages(): ICreatePackageParams[] {
    const packages: ICreatePackageParams[] = [];
    //   Create packages with max weight of 10kg
    const maxWeight = 50;
    let currentWeight = 0;
    let currentPackage: ICreatePackageParams = {
      width: 0,
      height: 0,
      depth: 0,
      address: this.address,
      weight: 0,
      contents: [],
    };
    this.items.forEach(item => {
      if (currentWeight + item.weight > maxWeight) {
        packages.push(currentPackage);
        currentPackage = {
          width: 0,
          height: 0,
          depth: 0,
          address: this.address,
          weight: 0,
          contents: [],
        };
        currentWeight = 0;
      }
      currentPackage.width += item.width;
      currentPackage.height += item.height;
      currentPackage.depth += item.depth;
      currentPackage.weight += item.weight;
      currentWeight += item.weight;
      currentPackage.contents.push(item.name);
    });
    return packages;
  }
  createPackage({
    width,
    height,
    depth,
    address,
    weight,
    contents,
  }: ICreatePackageParams): IPackage {
    return new DHLPackage({
      width,
      height,
      depth,
      address,
      weight,
      contents,
    });
  }
}
