import IDatabase from '../interfaces/IDatabase';
import ILoadBalancer from '../interfaces/ILoadBalancer';
import IStorage from '../interfaces/IStorage';
import IVirtualMachine from '../interfaces/IVirtualMachine';

export default abstract class CloudServiceFactory {
  abstract createStorage(): IStorage;
  abstract createVirtualMachine(): IVirtualMachine;
  abstract createDatabase(): IDatabase;
  abstract createLoadBalancer(): ILoadBalancer;
}
