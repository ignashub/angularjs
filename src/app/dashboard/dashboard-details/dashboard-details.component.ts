import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Department } from 'src/app/department';
import { DepartmentService } from 'src/app/department.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent implements OnInit {
  departments: Department[];
  selectedDepartment: Department;
  taskAmount: number;
  title = 'Dashboard';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTaskAmount();
  }

  getTaskAmount() {
    // this.taskAmount = this.taskService.getTasksAmount();
  }

  onSelect(department: Department): void {
    this.selectedDepartment = department;
  }

}
