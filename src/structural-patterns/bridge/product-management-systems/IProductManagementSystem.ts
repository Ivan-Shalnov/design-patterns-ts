import IProduct from '../IProduct';

export default interface IProductManagementSystem {
  addProduct(product: IProduct): IProduct;
  getProduct(id: string): IProduct | null;
  updateProduct(product: IProduct): IProduct;
}
