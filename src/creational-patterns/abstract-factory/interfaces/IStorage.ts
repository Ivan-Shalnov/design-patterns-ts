export default interface IStorage {
  id: string;
  name: string;
  capacity: number;
  saveFile(path: string, data: string): void;
  readFile(path: string): string;
  deleteFile(path: string): void;
}
