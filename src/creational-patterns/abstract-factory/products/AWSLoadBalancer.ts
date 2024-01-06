import ILoadBalancer from '../interfaces/ILoadBalancer';

export default class AWSLoadBalancer implements ILoadBalancer {
  public readonly servers: string[] = [];

  addServer(): void {
    console.info('Adding server to AWS load balancer...');
    this.servers.push(`AWS server ${this.servers.length}${1}`);
  }

  removeServer(): void {
    console.info('Removing server from AWS load balancer...');
    this.servers.pop();
  }

  request(): void {
    console.info('Requesting AWS load balancer...');
  }
}
