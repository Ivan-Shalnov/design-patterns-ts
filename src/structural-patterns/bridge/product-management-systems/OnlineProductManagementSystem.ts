import IApiConnector from '../connectors/IApiConnector';
import IProduct from '../IProduct';
import IProductManagementSystem from './IProductManagementSystem';

export default class OnlineProductManagementSystem
  implements IProductManagementSystem
{
  constructor(protected apiConnector: IApiConnector) {}

  addProduct(product: IProduct): IProduct {
    console.info('OnlineProductManagementSystem: addProduct');
    return this.apiConnector.createProduct(product);
  }

  getProduct(id: string): IProduct {
    console.info('OnlineProductManagementSystem: getProduct');
    return this.apiConnector.readProduct(id);
  }

  updateProduct(product: IProduct): IProduct {
    console.info('OnlineProductManagementSystem: updateProduct');
    return this.apiConnector.updateProduct(product);
  }
}
