export interface ParkingSpot {
  id?: number;
  spotType: 'MOTORCYCLE' | 'CAR';
  isOccupied: boolean;
}