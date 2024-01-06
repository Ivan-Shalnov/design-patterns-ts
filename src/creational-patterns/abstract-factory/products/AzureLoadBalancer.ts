import ILoadBalancer from '../interfaces/ILoadBalancer';

export default class AzureLoadBalancer implements ILoadBalancer {
  public readonly servers: string[] = [];

  addServer(): void {
    console.info('Adding server to Azure load balancer...');
    this.servers.push(`Azure server ${this.servers.length + 1}`);
  }

  removeServer(): void {
    console.info('Removing server from Azure load balancer...');
    this.servers.pop();
  }

  request(): void {
    console.info('Requesting Azure load balancer...');
  }
}
