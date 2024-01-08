import IProduct from '../IProduct';
import IApiConnector from './IApiConnector';

export default class GraphqlApiConnector implements IApiConnector {
  createProduct(product: IProduct): IProduct {
    console.info('Creating product using GraphQL API connector...');
    return product;
  }

  readProduct(id: string): IProduct {
    console.info('Reading product using GraphQL API connector...');
    return {
      id,
      name: 'Product from GraphQL API',
      price: 100,
      description: 'Product from GraphQL API',
    };
  }

  updateProduct(product: IProduct): IProduct {
    console.info('Updating product using GraphQL API connector...');
    return product;
  }
}
