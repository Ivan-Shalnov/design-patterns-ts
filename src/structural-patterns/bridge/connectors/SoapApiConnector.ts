import IProduct from '../IProduct';
import IApiConnector from './IApiConnector';

export default class SoapApiConnector implements IApiConnector {
  createProduct(product: IProduct): IProduct {
    console.info('Creating product using SOAP API connector...');
    return product;
  }

  readProduct(id: string): IProduct {
    console.info('Reading product using SOAP API connector...');
    return {
      id,
      name: 'Product from SOAP API',
      price: 100,
      description: 'Product from SOAP API',
    };
  }

  updateProduct(product: IProduct): IProduct {
    console.info('Updating product using SOAP API connector...');
    return product;
  }
}
