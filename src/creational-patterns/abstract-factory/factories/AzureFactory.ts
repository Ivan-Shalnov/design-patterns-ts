import CloudServiceFactory from './CloudServiceFactory';
import IDatabase from '../interfaces/IDatabase';
import ILoadBalancer from '../interfaces/ILoadBalancer';
import IStorage from '../interfaces/IStorage';
import IVirtualMachine from '../interfaces/IVirtualMachine';
import AzureDatabase from '../products/AzureDatabase';
import AzureLoadBalancer from '../products/AzureLoadBalancer';
import AzureStorage from '../products/AzureStorage';
import AzureVirtualMachine from '../products/AzureVirtualMachine';

export default class AzureFactory extends CloudServiceFactory {
  createStorage(): IStorage {
    console.info('Creating Azure storage...');
    return new AzureStorage('123', 'Azure Storage', 'running', 1000);
  }

  createVirtualMachine(): IVirtualMachine {
    console.info('Creating Azure virtual machine...');
    return new AzureVirtualMachine('123', 'Azure Virtual Machine', 'running');
  }

  createDatabase(): IDatabase {
    console.info('Creating Azure database...');
    return new AzureDatabase('123', 'Azure Database');
  }

  createLoadBalancer(): ILoadBalancer {
    console.info('Creating Azure load balancer...');
    return new AzureLoadBalancer();
  }
}
