import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Todos, todoIndex } from './todos-example';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

const todoList = Todos;
let index = todoIndex;
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodos(): Observable<Todo[]> {
    return of(todoList);
  }

  update(todo: Todo): Todo {
    if (todo.id === 0) {
      index = index + 1;
      todo.id = index;
      todoList.push(todo);
  } else {
    todoList.forEach((value, pos) => {
      if (value.id === todo.id) {
        todoList[pos] = todo;
      }
    });

  }
    return todo;
  }
  delete(id: number): void {
    todoList.forEach((value, pos) => {
      if (value.id === id) { todoList.splice(pos, 1); }
    });
 }

  constructor(private messageService: MessageService) { }
}
