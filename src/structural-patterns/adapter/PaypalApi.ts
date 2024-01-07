import { IPaypalTransaction } from './IPaypalTransaction';

export default class PaypalApi {
  makePayment(transaction: IPaypalTransaction) {
    console.info(
      `PaypalApi: Processing payment of ${transaction.transactionAmount.value} ${transaction.transactionAmount.currency}...`,
    );
  }
}
