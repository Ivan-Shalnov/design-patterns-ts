import { IRDB } from './IRDB';

export default class MySQLDB implements IRDB {
  connect(host: string, port: number, user: string, password: string): void {
    console.log(
      `Connecting to MySQL database ${host}:${port} with user ${user} and password ${password}`,
    );
  }

  disconnect(): void {
    console.log(`Disconnecting from MySQL database`);
  }

  query(sql: string): void {
    console.log(`Executing MySQL query: ${sql}`);
  }
}
