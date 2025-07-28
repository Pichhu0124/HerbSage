import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    // TODO: Add registration logic (e.g., API call)
    this.authService.getRegisterRes({ username: this.username, email: this.email, password: this.password }).subscribe({
      next: (res) => {
        if(res.success){
          this.router.navigate(["/login"])
        }
      },
      error: (err: Error) => {console.log(err)}
    })
  }
}
