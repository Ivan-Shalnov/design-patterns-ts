import BaseDecorator from './BaseDecorator';

export default class LoggerDecorator extends BaseDecorator {
  query(sql: string): void {
    console.log(`Logging query: ${sql}`);
    super.query(sql);
  }
}
