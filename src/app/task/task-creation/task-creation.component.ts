import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';
import { Department } from '../../department';
import { TaskService } from 'src/app/task.service';
import { DepartmentService } from 'src/app/department.service';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from '../../employee';
import { TASKS } from 'src/app/todo-tasks';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.css']
})
export class TaskCreationComponent implements OnInit {
  departments: Department[];
  tasksAPI: Task[];
  emp: Employee[] = [];
  employees: Employee[] = [];
  newTask: Task;
  tasks = TASKS;
  TaskDep: Department;
  TaskDepName: string;
  TaskEmp: string;
  employee: Employee;
  date: string;
  todo = '';
  emps: number[] = [];
  depsAPI: Department[];
  empsAPI: Employee[];


 onAddTask() {
  // todo: use service to add task  service.add
  this.newTask = {
    id: this.taskService.getNewId(),
    name: this.todo,
    department_id: this.TaskDep.id,
    description: 'This is a test',
    employees: this.emps,
    due_date: this.date,
  };
  this.taskService.addNewTask(this.newTask);
  this.taskService.addToApiTasks(this.newTask).subscribe(task => {
    this.tasksAPI.push(task);
  });
  this.todo = '';
  this.date = null;
  // this.emps.push(this.employee.id);
  this.TaskDep = null;
  this.taskService.setNewId();
  this.employees = this.employees.splice(0, this.employees.length);
  this.refersh();
}
// @Output() recipeWasSelected = new EventEmitter<Recipe>();

addEmpToTask() {
  this.emps.push(this.employee.id);
}

getEmployee(empName: string): void {
  for (const i of this.empsAPI) {
    if ( empName === i.first_name ) {
      this.employee = i;
    }
  }
}
refersh(): void {
  this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this._router.navigate([decodeURI(this._location.path())]);
  });

}

selectChangeHandler(event: any) {
  this.employees = this.employees.splice(0, this.employees.length);
  this.TaskDepName = event.target.value;
  this.getDepartment(this.TaskDepName);
  this.getEmployeesInDepartment(this.TaskDep);
}

selectChangeEmployee(event: any) {
  this.TaskEmp = event.target.value;
  this.getEmployee(this.TaskEmp);
}

getDepartment(dep: string): void {
  for (const i of this.depsAPI) {
    if (i.name === dep) {
      this.TaskDep = i;
    }
  }
}
getEmployeesInDepartment(dep: Department): void {
  for (const i of this.empsAPI) {
    if ( dep.id === i.department_id ) {
      this.emp.push(i);
    }
  }
  this.employees = this.emp;
}
  constructor(
              private taskService: TaskService,
              private departmentService: DepartmentService,
              private employeeService: EmployeeService, public _router: Router, public _location: Location
              ) { }

  ngOnInit() {
    this.getApiTasks();
    this.getApiDepartments();
    this.getApiEmployees();
  }
  getApiDepartments() {
    this.departmentService.getApiDepartments() .subscribe(deps => this.depsAPI = deps);
  }
  getApiTasks() {
    this.taskService.getApiTasks() .subscribe(tasks => this.tasksAPI = tasks);
  }
  getApiEmployees() {
    this.employeeService.getApiEmployees() .subscribe(emps => this.empsAPI = emps);
  }
}
