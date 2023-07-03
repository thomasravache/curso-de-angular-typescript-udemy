import { Component, OnInit } from '@angular/core';
import { ITaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public taskList: Array<ITaskList> = [];

  constructor() {  }

  ngOnInit(): void {

  }

  public setEmitTaskItem(event: string) {
    const taskItem: ITaskList = {
      task: event,
      checked: false
    };

    this.taskList.push(taskItem);
  }

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente deletar tudo?");

    if (confirm) this.taskList = [];
  }
}
