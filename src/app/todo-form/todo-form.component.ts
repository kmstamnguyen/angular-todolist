import { Component, OnInit, Input } from '@angular/core';
import { TodoItem, Status, Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass']
})
export class TodoFormComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  @Input() todo: TodoItem;
  allStatus: Status[];

  // console.log("tam");
  // model = new TodoItem(0, 't', Status.TODO, 'test');

  submitted = false;
  ngOnInit(): void {
  }

  newTodo() {
    this.todo = new TodoItem(0, 'new', Status.TODO, '', 
    [Status.TODO, Status.INPROGRESS, Status.DONE, Status.ARCHIVE]);
  }

  onSubmit() {
    this.todoService.update(this.todo);
    this.submitted = true;
    this.newTodo();
  }
}
