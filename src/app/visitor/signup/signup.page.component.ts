import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.page.component.html',
  styleUrls: ['./signup.page.component.scss']
})
export class SignupPageComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  onSubmit() {
    console.log('Form submitted', {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }
}
