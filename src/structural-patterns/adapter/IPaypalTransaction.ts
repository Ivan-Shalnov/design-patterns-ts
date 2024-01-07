export interface IPaypalTransaction {
  transactionId: string;
  transactionDate: string;
  transactionAmount: {
    currency: string;
    value: number;
  };
  transactionStatus: 1 | 2 | 3;
}
