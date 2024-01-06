export default interface ILoadBalancer {
  servers: string[];
  addServer(): void;
  removeServer(): void;
  request(): void;
}
