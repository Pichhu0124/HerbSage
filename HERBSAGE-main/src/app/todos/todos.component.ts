import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
   todoService = inject(TodoService)
   todoArr = signal<Array<Todo>>(this.todoService.todoArr)
   ngOnInit(): void {
     console.log(this.todoArr)
   }
}
