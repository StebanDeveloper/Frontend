export interface ParkingSpot {
  id?: number;
  spotType: 'MOTORCYCLE' | 'CAR' | 'LIGHT_VEHICLE';
  isOccupied: boolean;
}
