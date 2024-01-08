import RestApiConnector from './connectors/RestApiConnector';
import SoapApiConnector from './connectors/SoapApiConnector';
import OfflineProductManagementSystem from './product-management-systems/OfflineProductManagementSystem';
import OnlineProductManagementSystem from './product-management-systems/OnlineProductManagementSystem';

// OfflinePMS is a bridge between the client and the RestApiConnector
const OfflinePMS = new OfflineProductManagementSystem(new RestApiConnector());
console.log('OFFLINE PRODUCT MANAGEMENT SYSTEM');
OfflinePMS.addProduct({
  id: '1',
  name: 'Product 1',
  price: 100,
  description: 'Product 1 description',
});
OfflinePMS.goOnline();

// OnlinePMS is a bridge between the client and the RestApiConnector
const OnlinePMS = new OnlineProductManagementSystem(new SoapApiConnector());

console.log('ONLINE PRODUCT MANAGEMENT SYSTEM');
console.table(OnlinePMS.getProduct('1'));
