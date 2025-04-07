import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'; // Import NgForm for form validation

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  user = { name: '', email: '', password: '' };
  message: string = '';

  constructor(private http: HttpClient) {}

  // Method to register the user
  registerUser(form: NgForm) {
    if (form.invalid) {
      this.message = 'Please fill all the required fields.';
      return;
    }

    this.http.post('http://localhost:8080/users/registerUser', this.user)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.message = 'Registration Successful!';
          form.reset(); // Reset the form after successful registration
        },
        error: (error) => {
          console.error(error);
          this.message = 'Error registering user. Please try again.';
        }
      });
  }
}
