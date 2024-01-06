export class Delivery {
    address;
    items;
    packages = [];
    constructor(address, items) {
        this.address = address;
        this.items = items;
    }
    processDelivery() {
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
}
