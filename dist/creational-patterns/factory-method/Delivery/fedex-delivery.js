import { FedExPackage } from '../Package/fedex-package';
import { Delivery } from './delivery';
export class FedexDelivery extends Delivery {
    splitToPackages() {
        //  Create packages with max weight of 20kg
        const maxWeight = 20;
        let currentWeight = 0;
        let currentPackage = {
            width: 0,
            height: 0,
            depth: 0,
            address: this.address,
            weight: 0,
            contents: [],
        };
        this.items.forEach(item => {
            if (currentWeight + item.weight > maxWeight) {
                this.packages.push(this.createPackage(currentPackage));
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
        });
        return this.packages;
    }
    createPackage({ width, height, depth, address, weight, contents, }) {
        return new FedExPackage({
            width,
            height,
            depth,
            address,
            weight,
            contents,
        });
    }
}
