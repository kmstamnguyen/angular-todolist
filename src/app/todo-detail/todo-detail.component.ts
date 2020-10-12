import { Component, OnInit, Input } from '@angular/core';
import { Todo, Status } from '../todo';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass']
})
export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }
  allStatus = [Status.TODO, Status.INPROGRESS, Status.DONE, Status.ARCHIVE];
  ngOnInit(): void {
  }

}
