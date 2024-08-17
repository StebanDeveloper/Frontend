export type VehicleType = 'CAR' | 'MOTORCYCLE';

export interface Vehicle {
  id?: number; 
  licensePlate: string;  
  type: 'MOTORCYCLE' | 'CAR'; 
  isElectricOrHybrid: boolean; 
  entryTime: Date;
  parkingSpotId?: number | undefined ; 
  exitTime?: Date;
}
