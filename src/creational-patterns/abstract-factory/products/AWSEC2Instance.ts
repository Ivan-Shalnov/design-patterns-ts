import IVirtualMachine from '../interfaces/IVirtualMachine';

export default class AWSEC2Instance implements IVirtualMachine {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly status: string,
  ) {}

  start(): void {
    console.info(`Starting EC2 instance ${this.name}...`);
  }

  stop(): void {
    console.info(`Stopping EC2 instance ${this.name}...`);
  }

  restart(): void {
    console.info(`Restarting EC2 instance ${this.name}...`);
  }
}
