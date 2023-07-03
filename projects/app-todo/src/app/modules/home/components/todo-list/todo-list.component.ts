import { Component, OnInit } from '@angular/core';
import { ITaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public taskList: Array<ITaskList> = [
    { task: 'Minha task', checked: true }
  ];

  constructor() {  }

  ngOnInit(): void {

  }
}
