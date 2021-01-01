import { Component, OnInit, DoCheck, } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { TASKS } from '../todo-tasks';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, DoCheck {
  tasks: Task[];
  selectedTask: Task;
  tasksAPI: Task[];
  constructor(private taskService: TaskService, public _router: Router, public _location: Location) { }

  ngOnInit() {
    this.getTasks();
    this.getApiTasks();
  }
  ngDoCheck() {
    // this.getTasks();
  }
  closeWindow() {
    this.selectedTask = null;
  }

  setSelectedTask(task: Task): void {
    this.getTaskEmployees(task);
    this.selectedTask = task;
  }
  getTaskEmployees(task: Task) {
    task.employees = this.taskService.getTask(task);
  }
  // onRemoveTask(index) {
   // this.tasks.splice(index, 1);
  // }
  refersh(): void {
    this._router.navigateByUrl('/calender', { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    });

  }
  getTasks(): void {
    this.tasks = this.taskService.getTasks();
  }
  getApiTasks() {
    this.taskService.getApiTasks() .subscribe(tasks => this.tasksAPI = tasks);
  }
  onRemoveFromApi(task: Task) {
    this.tasksAPI = this.tasksAPI.filter(h => h !== task);
    this.taskService.deleteTask(task).subscribe();
    // this.getApiTasks();
  }

  onRemoveTask(taskName: string) {
    this.taskService.removeTask(taskName);
  }
 /* onSelect(task: Task): void {
    this.selectedTask = task;
  }*/
}
