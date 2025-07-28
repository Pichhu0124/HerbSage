import { Component, signal } from '@angular/core';
import { RouterOutlet } from '../../node_modules/@angular/router/router_module.d';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chatbot');
}

