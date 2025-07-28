import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is Ayurveda?',
      answer: 'Ayurveda is an ancient Indian system of medicine that focuses on balance in bodily systems using diet, herbal treatment, and yogic breathing.',
      open: false
    },
    {
      question: 'Can this chatbot diagnose diseases?',
      answer: 'No, this chatbot provides general Ayurvedic guidance. Please consult a certified Ayurvedic practitioner for diagnosis.',
      open: false
    },
    {
      question: 'Is the advice personalized?',
      answer: 'Yes, based on your responses, the chatbot gives tailored suggestions using Ayurvedic principles.',
      open: false
    },
    {
      question: 'Is this free to use?',
      answer: 'Yes, this chatbot is free for educational and wellness purposes.',
      open: false
    }
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
