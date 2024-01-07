import PaymentProcessor from './PaymentProcessor';
import PaypalApi from './PaypalApi';
import PaypalApiAdapter from './PaypalApiAdapter';

function clientCode(paymentProcessor: PaymentProcessor) {
  paymentProcessor.processPayment({
    amount: 100,
    currency: 'USD',
    date: '2021-09-01 00:00:00',
    id: '123',
    note: 'test',
    status: 'completed',
  });
}

const paymentProcessor = new PaymentProcessor();
clientCode(paymentProcessor);
const paymentProcessorAdapter = new PaypalApiAdapter(new PaypalApi());
clientCode(paymentProcessorAdapter);
