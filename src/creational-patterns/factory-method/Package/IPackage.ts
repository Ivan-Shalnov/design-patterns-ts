export default interface IPackage {
  trackingNumber: string | undefined;
  width: number;
  height: number;
  depth: number;
  address: string;
  weight: number;
  volumeWeight: number;
  description?: string;
  contents: string[];
  printLabel(): void;
  sendToServiceProvider(): void;
}
