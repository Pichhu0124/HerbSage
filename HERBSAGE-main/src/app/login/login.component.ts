import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService,private router: Router){}
  login() {
   this.authService.getLoginRes({email: this.email, password: this.password}).subscribe({
    next: (res) => {
      if(res.success){
        this.router.navigate(["/chat"])
      }
    },
    error: (err) => {
      console.log(err)
    }
   })
  }
}
