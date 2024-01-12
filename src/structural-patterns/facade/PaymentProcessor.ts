export default class PaymentProcessor {
  private payments: {
    id: string;
    sum: number;
    status: 'success' | 'failed' | 'pending';
  }[] = [];

  public createPayment(sum: number): string {
    const paymentId = Math.random().toString(36).substring(7);
    this.payments.push({ id: paymentId, sum, status: 'pending' });
    return paymentId;
  }

  public getPaymentStatus(paymentId: string): 'success' | 'failed' | 'pending' {
    const payment = this.payments.find(payment => payment.id === paymentId);
    if (payment) {
      return payment.status;
    }
    return 'failed';
  }

  public createPaymentLink(paymentId: string): string {
    return `https://payment.com/pay/${paymentId}`;
  }

  public setPaymentStatus(
    paymentId: string,
    status: 'success' | 'failed' | 'pending',
  ): void {
    const payment = this.payments.find(payment => payment.id === paymentId);
    if (payment) {
      payment.status = status;
    }
  }
}
