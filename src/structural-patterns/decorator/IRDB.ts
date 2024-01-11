export interface IRDB {
  connect(host: string, port: number, user: string, password: string): void;
  disconnect(): void;
  query(sql: string): void;
}
