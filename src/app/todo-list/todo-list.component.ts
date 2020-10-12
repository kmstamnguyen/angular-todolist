import { Component, OnInit } from '@angular/core';
import { Todo, Status, TodoItem } from '../todo';
import { Todos, todoIndex } from '../todos-example';
import { TodoService } from '../todo.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService, private messageService: MessageService) {}

  selectedTodo = new TodoItem(0, 'New todo', Status.TODO, 'This is test', [Status.TODO, Status.INPROGRESS, Status.DONE, Status.ARCHIVE]);
  todos = Todos;
  ngOnInit(): void {
    this.getTodos();
  }

  getStatusOption(status: Status, id: number): Status[] {
    let allStatus: Status[];
    switch (status){
      case Status.TODO: {
        if(id !== 0) {
          allStatus = [status, Status.INPROGRESS, Status.ARCHIVE];
        }
        else{
          allStatus = [Status.TODO, Status.INPROGRESS, Status.DONE, Status.ARCHIVE];
        }
        break;
      }
      case Status.INPROGRESS: {
        allStatus = [status, Status.DONE];
        break;
      }
      case Status.DONE: {
        allStatus = [status, Status.ARCHIVE];
        break;
      }
      default:
        break;
    }
    return allStatus;
  }
  onSelect(todo: Todo): void {
    const { id, title, desc, status } = todo;
    this.selectedTodo = new TodoItem(id, title, status, desc, this.getStatusOption(status, id));
    this.messageService.add(`Selected id=${todo.id}`);
  }
  getTodos(): void {
    this.todoService.getTodos()
    .subscribe(todos => this.todos = todos);
  }
  delete(id: number): boolean {
    try{
      this.todoService.delete(id);
    }catch(e){
      console.log("Error", e);
      return false;
    }
  }
}
