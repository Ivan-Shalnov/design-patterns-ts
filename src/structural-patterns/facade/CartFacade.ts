import OrderProcessor from './OrderProcessor';
import PaymentProcessor from './PaymentProcessor';
import ProductManagement from './ProductManagement';

export default class CartFacade {
  private orderProcessor: OrderProcessor = new OrderProcessor();

  private paymentProcessor: PaymentProcessor = new PaymentProcessor();

  private productManagement: ProductManagement = new ProductManagement();

  public items: { id: string; quantity: number; price: number }[] = [];

  get total(): number {
    return this.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  }

  public addItem(productId: string, quantity: number): void {
    const product = this.productManagement.getProduct(productId);
    if (product) {
      this.items.push({ ...product, quantity });
    }
  }

  public removeItem(productId: string): void {
    this.items = this.items.filter(item => item.id !== productId);
  }

  public checkout(
    customerName: string,
    customerEmail: string,
  ): { id: string; status: 'success' | 'failed' | 'pending' } {
    const orderId = this.orderProcessor.createOrder({
      customerEmail,
      customerName,
      items: this.items,
      total: this.total,
      paymentId: '',
      paymentStatus: 'pending',
    });
    const paymentId = this.paymentProcessor.createPayment(this.total);
    const paymentLink = this.paymentProcessor.createPaymentLink(paymentId);
    this.orderProcessor.setPaymentStatus(orderId, 'pending');
    console.info('Checkout completed');
    return { id: paymentLink, status: 'pending' };
  }
}
