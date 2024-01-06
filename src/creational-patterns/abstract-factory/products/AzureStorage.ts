import IStorage from '../interfaces/IStorage';

export default class AzureStorage implements IStorage {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly status: string,
    public readonly capacity: number,
  ) {}

  saveFile(path: string, data: string): void {
    console.info(
      `Saving file ${path} in Azure Storage ${this.name}...\n Data: ${data}`,
    );
  }

  readFile(path: string): string {
    console.info(`Reading file ${path} from Azure Storage ${this.name}...`);
    return '';
  }

  deleteFile(path: string): void {
    console.info(`Deleting file ${path} from Azure Storage ${this.name}...`);
  }
}
