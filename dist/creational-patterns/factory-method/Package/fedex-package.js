import { nanoid } from 'nanoid';
export class FedExPackage {
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
        console.log(`
        Package FedEx\n
        Tracking number: ${this.trackingNumber}\n
        Address: ${this.address}\n
        Weight: ${this.weight}\n
        Volume Weight: ${this.volumeWeight}\n
        Contents: ${contents}\n
      `);
    }
    sendToServiceProvider() {
        this.trackingNumber = 'FEDEX-' + nanoid();
        const contents = this.contents.join(', ');
        console.log(`
            Sending package to FedEx\n
            Tracking number: ${this.trackingNumber}\n
            Address: ${this.address}\n
            Weight: ${this.weight}\n
            Volume Weight: ${this.volumeWeight}\n
            Contents: ${contents}\n
        `);
    }
}
