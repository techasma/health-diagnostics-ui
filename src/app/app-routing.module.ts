import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TestBookingComponent } from './components/test-booking/test-booking.component';

const routes: Routes = [
  { path: 'register', component: RegisterUserComponent },
  { path: 'users', component: UserListComponent },
  { path: 'test-booking', component: TestBookingComponent },
  
  // Default route (redirects to '/register')
  { path: '', redirectTo: '/register', pathMatch: 'full' },  // Redirect to 'register' on default
  
  // Optional: You can use this if you want to catch any invalid routes
  { path: '**', redirectTo: '/register', pathMatch: 'full' }  // Wildcard route for 404 pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}  // ✅ Make sure this export is present
