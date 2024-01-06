import { IPackage } from './IPackage';
export class DHLPackage implements IPackage {
  trackingNumber: string | undefined;
  width: number;
  height: number;
  depth: number;
  address: string;
  weight: number;
  volumeWeight: number;
  contents: string[];
  constructor({
    width,
    height,
    depth,
    address,
    weight,
    contents,
  }: {
    width: number;
    height: number;
    depth: number;
    address: string;
    weight: number;
    contents: string[];
  }) {
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.address = address;
    this.weight = weight;
    this.volumeWeight = Math.max((width * height * depth) / 3000, weight);
    this.contents = contents;
  }
  printLabel(): void {
    const contents = this.contents.join(', ');
    console.log('DHL package label:');
    console.table({
      DeliveryBy: 'DHL',
      'Tracking number': this.trackingNumber,
      Address: this.address,
      Weight: this.weight,
      'Volume Weight': this.volumeWeight,
      Contents: contents,
    });
  }
  sendToServiceProvider(): void {
    this.trackingNumber = 'DHL-' + Math.random().toString(36).substr(2, 9);
    console.log('DHL package sent');
    console.table({
      DeliveryBy: 'DHL',
      'Tracking number': this.trackingNumber,
    });
  }
}
