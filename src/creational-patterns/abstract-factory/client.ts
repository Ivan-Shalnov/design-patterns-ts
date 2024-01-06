import AWSFactory from './factories/AWSFactory';
import AzureFactory from './factories/AzureFactory';
import CloudServiceFactory from './factories/CloudServiceFactory';
import IDatabase from './interfaces/IDatabase';
import ILoadBalancer from './interfaces/ILoadBalancer';
import IVirtualMachine from './interfaces/IVirtualMachine';

class CloudServiceManager {
  private cloudService: CloudServiceFactory;

  public database?: IDatabase;

  public virtualMachine?: IVirtualMachine;

  public loadBalancer?: ILoadBalancer;

  constructor(cloudServiceFactory: CloudServiceFactory) {
    this.cloudService = cloudServiceFactory;
  }

  createInfrastructure(): CloudServiceManager {
    this.database = this.cloudService.createDatabase();
    this.virtualMachine = this.cloudService.createVirtualMachine();
    this.loadBalancer = this.cloudService.createLoadBalancer();
    return this;
  }
}

const azureManager = new CloudServiceManager(new AzureFactory());
azureManager.createInfrastructure();
console.info(azureManager.database);
console.info(azureManager.virtualMachine);
console.info(azureManager.loadBalancer);
azureManager.database?.connect();
azureManager.database?.query('SELECT * FROM users');
azureManager.database?.disconnect();
console.info('------------------');
const awsManager = new CloudServiceManager(new AWSFactory());
awsManager.createInfrastructure();
console.info(awsManager.database);
console.info(awsManager.virtualMachine);
console.info(awsManager.loadBalancer);
awsManager.database?.connect();
awsManager.database?.query('SELECT * FROM users');
awsManager.database?.disconnect();
