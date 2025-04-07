import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TestBookingService } from '../../services/test-booking.service';
import { TestBooking } from 'src/app/model/test-booking.model';

@Component({
  selector: 'app-test-booking',
  templateUrl: './test-booking.component.html',
  styleUrls: ['./test-booking.component.scss']
})
export class TestBookingComponent implements OnInit {
  displayedColumns: string[] = ['appointmentId', 'user', 'test', 'appointmentDate', 'status', 'testType'];
  dataSource: MatTableDataSource<TestBooking> = new MatTableDataSource();
  newBooking: TestBooking = new TestBooking();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private testBookingService: TestBookingService) {}

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.testBookingService.getBookings().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error('Error fetching bookings:', error);
      }
    });
  }

  bookTest(): void {
    this.newBooking.user.userName="Muzeeb ur Rahman Farooqi";
    this.newBooking.user.userId=7;
    this.newBooking.user.email="f.muzeeb82@gmail.com"
    this.testBookingService.bookTest(this.newBooking).subscribe({
      next: (response) => {
        this.fetchBookings();  // Refresh the booking list after a successful booking
        this.resetNewBooking();
      },
      error: (error) => {
        console.error('Error booking test:', error);
      }
    });
  }

  resetNewBooking(): void {
    
    this.newBooking = new TestBooking();  // Reset form
  }
}
