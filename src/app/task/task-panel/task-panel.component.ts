import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.css']
})
export class TaskPanelComponent implements OnInit {
  @Output() taskWasCreated = new EventEmitter<boolean>();
  formIsShowing: boolean;
  search = '';
  searchTask: Task;
  tasks: Task[] = [];
  tasksAPI: Task[];

  onShowForm() {
    if (this.formIsShowing === false) {
      this.formIsShowing = true;
    } else {
      this.formIsShowing = false;
    }
  }

  getSearchTask() {
    this.setSearchTask(this.search);
  }
  setSearchTask(search: string) {
    for (const i of this.tasksAPI) {
      if ( search === i.name ) {
        this.searchTask = i;
      }
    }
  }

  constructor(private taskService: TaskService) { }
  ngOnInit() {
    this.formIsShowing = false;
    this.getTasks();
    this.getApiTasks();
  }

  getTasks(): void {
     this.tasks = this.taskService.getTasks();
  }

  getApiTasks() {
    this.taskService.getApiTasks() .subscribe(tasks => this.tasksAPI = tasks);
  }

}
