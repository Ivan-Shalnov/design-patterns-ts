import CartFacade from './CartFacade';

const cartInstance = new CartFacade();
cartInstance.addItem('1', 2);
cartInstance.addItem('2', 3);
console.log('Total:', cartInstance.total);
console.log('Checkout:', cartInstance.checkout('John Doe', 'email@email.com'));
