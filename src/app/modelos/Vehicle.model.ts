export type VehicleType = 'CAR' | 'MOTORCYCLE';

export interface Vehicle {
  id?: number; 
  licensePlate: string; 
  type: VehicleType; 
  isElectricOrHybrid: boolean; 
  entryTime: string; 
  parkingSpotId: number; 
  exitTime?: string; 
}
