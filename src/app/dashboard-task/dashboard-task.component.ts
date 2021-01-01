import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-task',
  templateUrl: './dashboard-task.component.html',
  styleUrls: ['./dashboard-task.component.css']
})
export class DashboardTaskComponent implements OnInit {
  tasks: Task[];
  @Input() selectedTask: Task;
  tasksAPI: Task[];
 // tasks: Task[];
 // selectedTask: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    // this.getTasks();
    this.getApiTasks();
  }
  closeWindow() {
    this.selectedTask = null;
  }
  onRemoveTask(index) {
     this.tasks.splice(index, 1);
  }
  getApiTasks() {
    this.taskService.getApiTasks() .subscribe(tasks => this.tasksAPI = tasks);
  }
  getTasks(): void {
    this.tasks = this.taskService.getTasks();
  }
  onSelect(task: Task): void {
    this.selectedTask = task;
  }
}
