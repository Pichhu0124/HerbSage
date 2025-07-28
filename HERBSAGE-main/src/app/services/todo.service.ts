import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoArr: Array<Todo> = [
    {
      id:1,
      title:"todo 1",
      completed: false
    },
    {
      id:2,
      title:"todo 2",
      completed: false
    },
    {
      id:3,
      title:"todo 3",
      completed: false
    },
    {
      id:4,
      title:"todo 4",
      completed: false
    },
    {
      id:5,
      title:"todo 5",
      completed: false
    },
  ]
  constructor() { }
}
