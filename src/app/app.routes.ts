import { Routes } from '@angular/router';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

export const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' }, // Redirige a /vehicles por defecto
  { path: 'vehicles', component: VehiclesComponent }
];
