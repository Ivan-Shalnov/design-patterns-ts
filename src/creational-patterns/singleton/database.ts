export default class Database {
  private static instance: Database;

  public log: string[] = [];

  private constructor() {
    console.log('Initializing database');
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public query(sql: string): void {
    this.log.push(`Query: ${sql}`);
    console.log(`Querying ${sql}`);
  }

  public update(sql: string): void {
    this.log.push(`Update: ${sql}`);
    console.log(`Updating ${sql}`);
  }

  public showLogs(): void {
    console.log(this.log.join('\n'));
  }
}
