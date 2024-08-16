import { Component } from '@angular/core';
import { Vehicle } from '../../modelos/Vehicle.model';
import { VehicleService } from '../../services/vehicle.service';
import { ParkingSpot } from '../../modelos/Parking.model';
import { ParkingService } from '../../services/parking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {
  
  availableSpots: ParkingSpot[] = [];
  selectedSpotId?: number;
  vehicle: Vehicle = {
    licensePlate: '',
    type: 'CAR', // Valor predeterminado
    isElectricOrHybrid: false,
    entryTime: new Date().toISOString(),
    parkingSpotId: 1 // Ajusta este valor según la lógica de tu aplicación
  };

  constructor(
    private vehicleService: VehicleService,
    private parkingSpotService: ParkingService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  

  submit(): void {
    this.vehicleService.addVehicle(this.vehicle).subscribe(response => {
      console.log('Vehicle added successfully', response);
      // Puedes redirigir al usuario a la lista de vehículos o mostrar un mensaje de éxito
    }, error => {
      console.error('Error adding vehicle', error);
      // Maneja el error adecuadamente
    });
  }
}