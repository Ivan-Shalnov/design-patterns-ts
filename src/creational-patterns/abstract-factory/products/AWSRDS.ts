import IDatabase from '../interfaces/IDatabase';

export default class AWSRDS implements IDatabase {
  public status = 'disconnected';

  constructor(
    public readonly id: string,
    public readonly name: string,
  ) {}

  connect(): void {
    this.status = 'connected';
    console.info(`Connecting to RDS ${this.name}...`);
  }

  disconnect(): void {
    this.status = 'disconnected';
    console.info(`Disconnecting from RDS ${this.name}...`);
  }

  query(query: string): void {
    console.info(`Querying ${this.name} with query: ${query}`);
  }
}
