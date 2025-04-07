import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AppRoutingModule } from './app-routing.module'; // ✅ Make sure this matches the filename
import { UserService } from './services/user.service';
import { UserListComponent } from './components/user-list/user-list.component';

import { TestBookingService } from './services/test-booking.service';
import { TestBookingComponent } from './components/test-booking/test-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input';         // Import MatInputModule
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';  // For card layout (optional)
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';  // Import the Native Date Adapter

//import { MatDatepickerToggleModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    UserListComponent,
    TestBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule,
    MatToolbarModule,FormsModule,
    MatFormFieldModule, // Add the Material Form Field Module
    MatInputModule,     // Add the Material Input Module
    MatButtonModule,    // Add the Material Button Module
    FormsModule,        // Add the Forms Module for ngModel
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
   
   // MatDatepickerToggleModule
    
  ],
  providers: [UserService,TestBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
