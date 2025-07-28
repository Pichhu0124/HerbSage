import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLogedIn = signal(false)
  username = signal("")
  constructor(private authService: AuthService,private router:Router) { }
  ngOnInit(): void {
    this.authService.getMeRes().subscribe({
      next: (res) => {
        if (res.success) {
          this.isLogedIn.set(true)
          this.username.set(res.user.username)
        }
      },
      error: (err) => {
        this.isLogedIn.set(false)
        console.log(err)
      }
    })
  }
  logout() {
    this.authService.logout().subscribe({
      next: (res) => {
        if (res.success) {
          this.isLogedIn.set(false)
          this.router.navigate(["/"])
        }
      },
      error: (err) => {
        this.isLogedIn.set(true)
        console.log(err)
      }
    })
  }
}
