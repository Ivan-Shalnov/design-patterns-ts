import { DHLDelivery } from './Delivery/dhl-delivery';
import { FedexDelivery } from './Delivery/fedex-delivery';
const orderItems = [
    {
        name: 'Macbook Pro 13',
        width: 10,
        height: 10,
        depth: 10,
        weight: 10,
    },
    {
        name: 'Macbook Pro 15',
        width: 10,
        height: 10,
        depth: 10,
        weight: 5,
    },
    {
        name: 'Macbook Pro 16',
        width: 10,
        height: 10,
        depth: 10,
        weight: 10,
    },
    {
        name: 'Macbook Pro 17',
        width: 10,
        height: 10,
        depth: 10,
        weight: 7,
    },
    {
        name: 'Macbook Pro 18',
        width: 10,
        height: 10,
        depth: 10,
        weight: 12,
    },
    {
        name: 'Macbook Pro 19',
        width: 10,
        height: 10,
        depth: 10,
        weight: 11,
    },
    {
        name: 'Macbook Pro 20',
        width: 10,
        height: 10,
        depth: 10,
        weight: 20,
    },
    {
        name: 'Macbook Pro 21',
        width: 10,
        height: 10,
        depth: 10,
        weight: 5,
    },
];
class Order {
    items;
    address;
    deliveryServiceProvider;
    constructor(items, deliveryServiceProvider, address) {
        this.items = items;
        this.address = address;
        this.items = items;
        switch (deliveryServiceProvider) {
            case 'fedex':
                this.deliveryServiceProvider = new FedexDelivery(address, items);
                break;
            case 'dhl':
                this.deliveryServiceProvider = new DHLDelivery(address, items);
                break;
            default:
                throw new Error('Invalid delivery service provider');
        }
    }
    processOrder() {
        this.deliveryServiceProvider.processDelivery();
    }
}
const order1 = new Order(orderItems, 'fedex', '123 Main St');
order1.processOrder();
console.log('Order 1 packages: ', order1.deliveryServiceProvider.packages);
const order2 = new Order(orderItems, 'dhl', '123 Main St');
order2.processOrder();
console.log('Order 2 packages: ', order2.deliveryServiceProvider.packages);
