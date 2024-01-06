export default interface IDatabase {
  id: string;
  name: string;
  status: string;
  connect(): void;
  disconnect(): void;
  query(query: string): void;
}
