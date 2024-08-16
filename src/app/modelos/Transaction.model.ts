import { Vehicle } from './Vehicle.model';

export interface Transaction {
  id?: number;
  vehicle: Vehicle;
  transactionTime: string;
  amount: number;
}