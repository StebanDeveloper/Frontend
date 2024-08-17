import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ParkingSpot } from './../modelos/Parking.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  private apiUrl = `${environment.apiBaseUrl}`; 

  constructor(private http: HttpClient) {}

  getAvailableParkingSpots(): Observable<ParkingSpot[]> {
    return this.http.get<ParkingSpot[]>(`${this.apiUrl}/available`);
  }

}
