export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  items: { id: string; quantity: number; price: number }[];
  total: number;
  paymentId: string;
  paymentStatus: 'success' | 'failed' | 'pending';
}

export default class OrderProcessor {
  private orders: Order[] = [];

  public createOrder({
    customerEmail,
    customerName,
    items,
    total,
    paymentId,
    paymentStatus,
  }: Omit<Order, 'id'>): string {
    console.info('Creating order');
    const orderId = Math.random().toString(36).substring(7);
    this.orders.push({
      id: orderId,
      customerEmail,
      customerName,
      items,
      total,
      paymentId,
      paymentStatus,
    });

    return orderId;
  }

  setPaymentStatus(
    orderId: string,
    status: 'success' | 'failed' | 'pending',
  ): void {
    const order = this.orders.find(el => el.id === orderId);
    console.log('Setting payment status');
    if (order) {
      order.paymentStatus = status;
    }
  }
}
