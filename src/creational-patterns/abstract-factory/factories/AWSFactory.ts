import ICloudServiceFactory from '../interfaces/ICloudServiceFactory';
import IDatabase from '../interfaces/IDatabase';
import ILoadBalancer from '../interfaces/ILoadBalancer';
import IStorage from '../interfaces/IStorage';
import IVirtualMachine from '../interfaces/IVirtualMachine';
import AWSEC2Instance from '../products/AWSEC2Instance';
import AWSLoadBalancer from '../products/AWSLoadBalancer';
import AWSRDS from '../products/AWSRDS';
import AWSStorage from '../products/AWSStorage';

export default class AWSFactory implements ICloudServiceFactory {
  createStorage(): IStorage {
    console.info('Creating AWS storage...');
    return new AWSStorage('123', 'AWS Storage', 1000);
  }

  createVirtualMachine(): IVirtualMachine {
    console.info('Creating AWS virtual machine...');
    return new AWSEC2Instance('123', 'AWS Virtual Machine', 'running');
  }

  createDatabase(): IDatabase {
    console.info('Creating AWS database...');
    return new AWSRDS('123', 'AWS Database');
  }

  createLoadBalancer(): ILoadBalancer {
    console.info('Creating AWS load balancer...');
    return new AWSLoadBalancer();
  }
}
