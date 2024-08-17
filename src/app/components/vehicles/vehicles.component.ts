import { Component, OnInit } from '@angular/core';
import { Vehicle, VehicleType } from '../../modelos/Vehicle.model';
import { VehicleService } from '../../services/vehicle.service';
import { ParkingSpot } from '../../modelos/Parking.model';
import { FormsModule } from '@angular/forms';
import { ParkingService } from '../../services/parking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicleType: VehicleType = 'MOTORCYCLE';
  vehicle: Vehicle = {
    licensePlate: '',
    type: 'CAR',
    isElectricOrHybrid: false,
    entryTime: new Date(),
    parkingSpotId: 0
  };

  availableParkingSpots: ParkingSpot[] = [];
  showElectricOrHybridField = true;
  registeredVehicles: Vehicle[] = [];

  constructor(
    private vehicleService: VehicleService,
    private parkingService: ParkingService
  ) {}

  ngOnInit(): void {
    this.loadRegisteredVehicles();
    this.loadAvailableParkingSpots();
  }

  loadAvailableParkingSpots(): void {
    this.parkingService.getAvailableParkingSpots().subscribe({
      next: (spots) => {
        this.availableParkingSpots = spots;
      },
      error: (err: HttpErrorResponse) => console.error('Error al cargar las plazas de estacionamiento', err.message)
    });
  }

  finalizeVehicle(vehicleId: number) {
    this.vehicleService.finalizeVehicle(vehicleId).subscribe(response => {
      this.loadRegisteredVehicles();
    });
  }


  loadRegisteredVehicles() {
    this.vehicleService.getRegisteredVehicles().subscribe(data => {
      this.registeredVehicles = data;
    });
  }

  finalizeAllVehicles(): void {
    this.vehicleService.finalizeAllVehicles().subscribe({
      next: (response: any) => {
        const totalRevenue = response.totalRevenue;
        alert('Total de ganancias del día: $' + totalRevenue);
      },
      error: (err: any) => {
        alert('Error al finalizar vehículos: ' + err.message);
      }
    });
  }

  addVehicle(): void {
    if (this.vehicle.parkingSpotId !== undefined) {
      this.vehicleService.addVehicle(this.vehicle).subscribe({
        next: (response) => {
          alert(JSON.stringify(response));
          this.resetForm();
        },
        error: (err: any) => {
          console.error('Error al añadir vehículo', err);
        }
      });
    } else {
      console.error('ID de la plaza de estacionamiento es undefined');
    }
  }

  onVehicleTypeChange(): void {
    this.showElectricOrHybridField = this.vehicle.type === 'CAR';
    
    if (this.vehicle.type === 'MOTORCYCLE') {
      this.vehicle.isElectricOrHybrid = false; 
    }

  }

  private resetForm(): void {
    this.vehicle = {
      licensePlate: '',
      type: 'CAR',
      isElectricOrHybrid: false,
      entryTime: new Date(),
      parkingSpotId: 0
    };
    this.loadAvailableParkingSpots();
  }

  deleteVehicle(vehicleId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este vehículo?')) {
      this.vehicleService.deleteVehicle(vehicleId).subscribe({
        next: () => {
          alert('Vehículo eliminado exitosamente.');
          this.loadRegisteredVehicles();
          this.loadAvailableParkingSpots();
        },
        error: (err: any) => {
          alert('Error al eliminar vehículo: ' + err.message);
        }
      });
    }
  }
}
