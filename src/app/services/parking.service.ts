import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ParkingSpot } from './../modelos/Parking.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  private apiUrl = `${environment.apiBaseUrl}/parking-spots`;

  constructor(private http: HttpClient) { }

  getParkingSpots(): Observable<ParkingSpot[]> {
    return this.http.get<ParkingSpot[]>(this.apiUrl);
  }

  getParkingSpot(id: number): Observable<ParkingSpot> {
    return this.http.get<ParkingSpot>(`${this.apiUrl}/${id}`);
  }

  addParkingSpot(spot: ParkingSpot): Observable<ParkingSpot> {
    return this.http.post<ParkingSpot>(this.apiUrl, spot);
  }

  updateParkingSpot(spot: ParkingSpot): Observable<ParkingSpot> {
    return this.http.put<ParkingSpot>(`${this.apiUrl}/${spot.id}`, spot);
  }

  deleteParkingSpot(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
