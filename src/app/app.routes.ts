import { Routes } from '@angular/router';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ParkingComponent } from './components/parking/parking.component';

const routes: Routes = [
    { path: '', redirectTo: '/vehicles', pathMatch: 'full' }, // Ruta por defecto
    { path: 'vehicles', component: VehiclesComponent }, // Lista de vehículos
    { path: 'transaction', component: TransactionComponent }, // Entrada de nuevos vehículos
    { path: 'spots', component: ParkingComponent } // Lista de plazas de estacionamiento
  ];
  
