import IVirtualMachine from '../interfaces/IVirtualMachine';

export default class AzureVirtualMachine implements IVirtualMachine {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly status: string,
  ) {}

  start(): void {
    console.info(`Starting Azure virtual machine ${this.name}...`);
  }

  stop(): void {
    console.info(`Stopping Azure virtual machine ${this.name}...`);
  }

  restart(): void {
    console.info(`Restarting Azure virtual machine ${this.name}...`);
  }
}
