import { nanoid } from 'nanoid';
export class DHLPackage {
    trackingNumber;
    width;
    height;
    depth;
    address;
    weight;
    volumeWeight;
    contents;
    constructor({ width, height, depth, address, weight, contents, }) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.address = address;
        this.weight = weight;
        this.volumeWeight = Math.max((width * height * depth) / 3000, weight);
        this.contents = contents;
    }
    printLabel() {
        const contents = this.contents.join(', ');
        console.log(`Package DHL\n
        Tracking number: ${this.trackingNumber}\n
        Address: ${this.address}\n
        Weight: ${this.weight}\n
        Volume Weight: ${this.volumeWeight}\n
        Contents: ${contents}\n
        `);
    }
    sendToServiceProvider() {
        this.trackingNumber = 'DHL-' + nanoid();
        const contents = this.contents.join(', ');
        console.log(`
            Sending package to DHL\n
            Tracking number: ${this.trackingNumber}\n
            Address: ${this.address}\n
            Weight: ${this.weight}\n
            Volume Weight: ${this.volumeWeight}\n
            Contents: ${contents}\n
        `);
    }
}
