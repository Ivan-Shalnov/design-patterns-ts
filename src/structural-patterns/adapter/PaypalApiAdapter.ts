import ITransaction from './ITransaction';
import PaymentProcessor from './PaymentProcessor';
import PaypalApi from './PaypalApi';

export default class PaypalApiAdapter extends PaymentProcessor {
  constructor(private adaptee: PaypalApi) {
    super();
  }

  processPayment(transaction: ITransaction) {
    const standartTransaction =
      this.convertTransactionToPaypalTransaction(transaction);
    this.adaptee.makePayment(standartTransaction);
  }

  convertTransactionStatus(status: ITransaction['status']) {
    let transactionStatus: 1 | 2 | 3;
    if (status === 'completed') {
      transactionStatus = 1;
    } else if (status === 'pending') {
      transactionStatus = 2;
    } else {
      transactionStatus = 3;
    }
    return transactionStatus;
  }

  convertTransactionToPaypalTransaction(transaction: ITransaction) {
    const transactionStatus = this.convertTransactionStatus(transaction.status);
    return {
      transactionId: transaction.id,
      transactionDate: transaction.date,
      transactionAmount: {
        currency: transaction.currency,
        value: transaction.amount,
      },
      transactionStatus,
    };
  }
}
