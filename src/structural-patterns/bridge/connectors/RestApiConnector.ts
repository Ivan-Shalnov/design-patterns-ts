import IProduct from '../IProduct';
import IApiConnector from './IApiConnector';

export default class RestApiConnector implements IApiConnector {
  createProduct(product: IProduct): IProduct {
    console.info('Creating product using REST API connector...');
    return product;
  }

  readProduct(id: string): IProduct {
    console.info('Reading product using REST API connector...');
    return {
      id,
      name: 'Product from REST API',
      price: 100,
      description: 'Product from REST API',
    };
  }

  updateProduct(product: IProduct): IProduct {
    console.info('Updating product using REST API connector...');
    return product;
  }
}
