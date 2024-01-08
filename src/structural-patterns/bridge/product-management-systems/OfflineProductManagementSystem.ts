import IApiConnector from '../connectors/IApiConnector';
import IProduct from '../IProduct';
import IProductManagementSystem from './IProductManagementSystem';

interface IAction {
  action: 'add' | 'update';
  data: IProduct;
}

export default class OfflineProductManagementSystem
  implements IProductManagementSystem
{
  private actionQueue: IAction[] = [];

  private localStore: IProduct[] = [];

  private isOnline = false;

  constructor(protected apiConnector: IApiConnector) {}

  addProduct(product: IProduct): IProduct {
    console.info('OfflineProductManagementSystem: addProduct');
    if (this.isOnline) {
      return this.apiConnector.createProduct(product);
    }

    this.actionQueue.push({ action: 'add', data: product });
    return product;
  }

  getProduct(id: string): IProduct | null {
    console.info('OfflineProductManagementSystem: getProduct');
    if (this.isOnline) {
      return this.apiConnector.readProduct(id);
    }
    return this.localStore.find(product => product.id === id) ?? null;
  }

  updateProduct(product: IProduct): IProduct {
    console.info('OfflineProductManagementSystem: updateProduct');
    if (this.isOnline) {
      return this.apiConnector.updateProduct(product);
    }
    this.actionQueue.push({ action: 'update', data: product });
    return product;
  }

  private proccesActionQueue() {
    this.actionQueue.forEach(action => {
      switch (action.action) {
        case 'add':
          this.localStore.push(action.data);
          this.apiConnector.createProduct(action.data);
          break;
        case 'update':
          this.localStore = this.localStore.map(product =>
            product.id === action.data.id ? action.data : product,
          );
          this.apiConnector.updateProduct(action.data);
          break;
        default:
          throw new Error('Invalid action');
      }
    });
    this.actionQueue = [];
  }

  public goOnline() {
    console.info('OfflineProductManagementSystem: goOnline');
    this.isOnline = true;
    this.proccesActionQueue();
  }

  public goOffline() {
    console.info('OfflineProductManagementSystem: goOffline');
    this.isOnline = false;
  }
}
