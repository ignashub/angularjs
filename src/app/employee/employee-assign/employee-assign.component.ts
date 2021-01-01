import { Component, OnInit, Input, Output } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/department';
import { TouchSequence } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-assign',
  templateUrl: './employee-assign.component.html',
  styleUrls: ['./employee-assign.component.css']
})
export class EmployeeAssignComponent implements OnInit {
  newEmployee: Employee;
  depsAPI: Department[];
  empsAPI: Employee[];
  empDepartment: string;
  taskArray: string[] = [];
  empName = '';
  empLastName = '';
  empDoB = '';
  @Input() id:number;

 onAddEmployee() {
  this.newEmployee = {
    id: this.employeeService.getNewId(),
    department_id: this.getDepartmentID(this.empDepartment),
    first_name: this.empName,
    last_name: this.empLastName,
    birth_date: this.empDoB
  };
  this.employeeService.addNewEmployee(this.newEmployee);
  this.employeeService.addToApiEmployee(this.newEmployee).subscribe(employee => {
    this.empsAPI.push(employee);
  });
  // this.departmentService.assignToDepartment(this.newEmployee.department, this.newEmployee);
  this.empName = '';
  this.empLastName = '';
  this.empDoB = '';
  this.employeeService.setNewId();
  this.getApiEmployees();
  this.refersh();
}

  selectChangeHandler(event: any) {
    this.empDepartment = event.target.value;
  }

  refersh(): void {
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

  getDepartmentID(depName: string): number {
    for (const i of this.depsAPI) {
      if (depName === i.name) {
        return i.id;
      }
    }
  }

  constructor(private employeeService: EmployeeService,
              private departmentService: DepartmentService,
              public _router: Router,
              public _location: Location) { }

  ngOnInit() {
    this.getApiDepartments();
  }

  getApiDepartments() {
    this.departmentService.getApiDepartments() .subscribe(deps => this.depsAPI = deps);
  }

  getApiEmployees() {
    this.employeeService.getApiEmployees() .subscribe(emps => this.empsAPI = emps);
  }


}
