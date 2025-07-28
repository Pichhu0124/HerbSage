import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';

  login() {
    console.log('Login clicked', { email: this.email, password: this.password });
    // TODO: Add authentication logic here
  }
}
