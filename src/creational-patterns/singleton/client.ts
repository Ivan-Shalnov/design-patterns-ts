import Database from './database';

const dbInstance1 = Database.getInstance();
const dbInstance2 = Database.getInstance();
if (dbInstance1 === dbInstance2) {
  console.log('Singleton works, both variables contain the same instance.');
} else {
  console.log('Singleton failed, variables contain different instances.');
}
dbInstance1.query('SELECT * FROM users');
dbInstance2.update('INSERT INTO users VALUES ...');
console.info('Logs DB_INSTANCE 1:');
dbInstance1.showLogs();
console.info('Logs DB_INSTANCE 2:');
dbInstance2.showLogs();
