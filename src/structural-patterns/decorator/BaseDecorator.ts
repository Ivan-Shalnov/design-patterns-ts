import { IRDB } from './IRDB';

export default abstract class BaseDecorator implements IRDB {
  protected db: IRDB;

  constructor(db: IRDB) {
    this.db = db;
  }

  connect(host: string, port: number, user: string, password: string): void {
    this.db.connect(host, port, user, password);
  }

  disconnect(): void {
    this.db.disconnect();
  }

  query(sql: string): void {
    this.db.query(sql);
  }
}
