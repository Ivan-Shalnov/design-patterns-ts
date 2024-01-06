export default interface IVirtualMachine {
  id: string;
  name: string;
  status: string;
  start(): void;
  stop(): void;
  restart(): void;
}
