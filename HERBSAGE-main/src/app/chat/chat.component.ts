import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AiService } from '../services/ai.service';
import { CommonModule } from '@angular/common';

type Chat = {
  question: string;
  reply: string;
};

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  message: string = '';
  isThinking = signal(false);
  chats = signal<Chat[]>([
    {
      question: '',
      reply: 'Hello! How can I assist you with Ayurveda today?'
    }
  ]);

  constructor(private aiService: AiService) {}

  sendMessage() {
    const userMessage = this.message.trim();
    if (!userMessage) return;

    // Push user question first
    const updatedChats = [...this.chats(), { question: userMessage, reply: '' }];
    this.chats.set(updatedChats);
    this.message = '';
    this.isThinking.set(true);

    this.aiService.getChatRes({ question: userMessage }).subscribe({
      next: (res) => {
        // Update last chat with reply
        const finalChats = [...this.chats()];
        finalChats[finalChats.length - 1].reply = res.reply;
        this.chats.set(finalChats);
        this.isThinking.set(false);
      },
      error: (err) => {
        console.error(err);
        this.isThinking.set(false);
      }
    });
  }
}
