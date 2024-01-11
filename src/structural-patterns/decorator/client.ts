import LoggerDecorator from './LoggerDecorator';
import MySQLDB from './MySQLDB';

const MysqlDBInstance = new MySQLDB();
const MysqlDBInstanceWithLogger = new LoggerDecorator(MysqlDBInstance);
console.log('Querying MySQL database without logging');
MysqlDBInstance.query('SELECT * FROM users');
console.log('Querying MySQL database with logging');
MysqlDBInstanceWithLogger.query('SELECT * FROM users');
