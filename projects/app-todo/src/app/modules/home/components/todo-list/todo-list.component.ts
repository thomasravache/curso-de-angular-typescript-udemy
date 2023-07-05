import { Component, DoCheck, OnInit } from '@angular/core';
import { ITaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {
  public taskList: Array<ITaskList> = [];

  constructor() {  }

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  }

  ngOnInit(): void {  }

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

  public deleteAllTaskList(): void {
    const confirm = window.confirm("Você deseja realmente deletar tudo?");

    if (confirm) this.taskList = [];
  }

  public validationInput(event: string, index: number): void {
    if (!event.length) {
      const confirm = window.confirm("Task está vazia, deseja Deletar?");

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
