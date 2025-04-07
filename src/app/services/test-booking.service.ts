import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestBooking } from '../model/test-booking.model';

@Injectable({
  providedIn: 'root'
})
export class TestBookingService {

  private apiUrl = 'http://localhost:8080/test-booking';

  constructor(private http: HttpClient) { }

  // Get all bookings
  getBookings(): Observable<TestBooking[]> {
    return this.http.get<TestBooking[]>(this.apiUrl);
  }

  // Book a new test
  bookTest(booking: TestBooking): Observable<TestBooking> {
    return this.http.post<TestBooking>(`${this.apiUrl}/book`, booking);
  }
}
