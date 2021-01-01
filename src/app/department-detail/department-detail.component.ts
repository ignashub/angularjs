import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Department} from '../department';
import { DepartmentService } from 'src/app/department.service';
import { EmployeeService } from 'src/app/employee.service';
import { DEPARTMENTS } from '../list-departments';
import { Employee } from '../employee';
import { EMPLOYEES } from '../employeeList';


@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DepartmentDetailComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() department: Department;
  @Input() id: number;
  departments = DEPARTMENTS
  depsAPI: Department[];
  empsAPI: Employee[];
  dep: Department;
  departmentName = '';
  employeeName: String;
  emp: Employee[] = [];
  employees: Employee[] = [];
  emps: string[] = [];
  TaskDepName: string;
  TaskDep: Department;
  TaskEmp: string;
  selectedDepartment: Department;

  selectChangeHandler(event: any) {
    this.employees = this.employees.splice(0, this.employees.length);
    this.TaskDepName = event.target.value;
    this.getDepartment(this.TaskDepName);
    this.getEmployeesInDepartment(this.TaskDep);
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
  onSelect(department: Department): void {
     for (const i of this.employeeService.getEmployees()) {
       if (department.id === i.department_id) {
       this.emps.push(i.first_name);
       }
     }
  }

  constructor(private employeeService: EmployeeService, private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getApiDepartments();
    this.getApiEmployees();
  }
  getApiEmployees() {
    this.employeeService.getApiEmployees() .subscribe(emps => this.empsAPI = emps);
  }
  getApiDepartments() {
    this.departmentService.getApiDepartments() .subscribe(deps => this.depsAPI = deps);
  }
  close() {
    this.updateDepartment();
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  updateDepartment() {
    this.departmentService.updateDepartment(this.department).subscribe();
  }
}
