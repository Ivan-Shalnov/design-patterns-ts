import ITransaction from './ITransaction';

export default class PaymentProcessor {
  processPayment(transaction: ITransaction) {
    console.info(
      `PaymentProcessor - Processing payment of ${transaction.amount} ${transaction.currency}...`,
    );
  }
}
