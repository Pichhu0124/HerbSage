import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { FaqComponent } from '../components/faq/faq.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent,RouterLink, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imagePath = "assets/images/chatbot-ayurveda.jpeg"
}
