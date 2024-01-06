import IStorage from '../interfaces/IStorage';

export default class AWSStorage implements IStorage {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly capacity: number,
  ) {}

  saveFile(path: string, data: string): void {
    console.info(
      `Saving file ${path} in AWS S3 bucket ${this.name}...\n Data: ${data}`,
    );
  }

  readFile(path: string): string {
    console.info(`Reading file ${path} from AWS S3 bucket ${this.name}...`);
    return '';
  }

  deleteFile(path: string): void {
    console.info(`Deleting file ${path} from AWS S3 bucket ${this.name}...`);
  }
}
