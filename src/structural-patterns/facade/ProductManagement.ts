export default class ProductManagement {
  private products: {
    id: string;
    name: string;
    price: number;
  }[] = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
    },
    {
      id: '2',
      name: 'Product 2',
      price: 200,
    },
    {
      id: '3',
      name: 'Product 3',
      price: 300,
    },
    {
      id: '4',
      name: 'Product 4',
      price: 400,
    },
  ];

  addProduct(name: string, price: number): string {
    console.info('Adding product');
    const productId = Math.random().toString(36).substring(7);
    this.products.push({ id: productId, name, price });
    return productId;
  }

  getProduct(
    productId: string,
  ): { id: string; name: string; price: number } | undefined {
    console.info('Getting product');
    return this.products.find(product => product.id === productId);
  }
}
