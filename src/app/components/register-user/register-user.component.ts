import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  user = { name: '', email: '', password: '' };
  message: string = '';

  constructor(private http: HttpClient) {}

  registerUser() {
    this.http.post('http://localhost:8080/users/registerUser', this.user)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.message = 'Registration Successful!';
        },
        error: (error) => {
          console.error(error);
          this.message = 'Error registering user. Please try again.';
        }
      });
  }
}
