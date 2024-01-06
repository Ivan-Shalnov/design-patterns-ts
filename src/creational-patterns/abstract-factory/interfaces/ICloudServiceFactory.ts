import IDatabase from './IDatabase';
import ILoadBalancer from './ILoadBalancer';
import IStorage from './IStorage';
import IVirtualMachine from './IVirtualMachine';

export default interface ICloudServiceFactory {
  createStorage(): IStorage;
  createVirtualMachine(): IVirtualMachine;
  createDatabase(): IDatabase;
  createLoadBalancer(): ILoadBalancer;
}
