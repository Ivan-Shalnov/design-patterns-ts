import IProduct from '../IProduct';

export default interface IApiConnector {
  createProduct(product: IProduct): IProduct;
  readProduct(id: string): IProduct;
  updateProduct(product: IProduct): IProduct;
}
