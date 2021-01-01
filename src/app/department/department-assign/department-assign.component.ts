import { Component, OnInit, Input } from '@angular/core';
import { Department } from 'src/app/department';
import { DepartmentService } from 'src/app/department.service';
import { EmployeeService } from 'src/app/employee.service';
import { DEPARTMENTS } from '../../list-departments';
import { EMPLOYEES } from '../../employeeList';
import { Employee } from 'src/app/employee';
import { TouchSequence } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-department-assign',
  templateUrl: './department-assign.component.html',
  styleUrls: ['./department-assign.component.css']
})
export class DepartmentAssignComponent implements OnInit {
  departments = DEPARTMENTS
  dep: Department;
  newDepartment: Department;
  departmentName = '';
  buildingID = '';
  depsAPI: Department[];

  emp: Employee[] = [];
  employees: Employee[] = [];
  emps: string[] = [];

  @Input() id:number;

 onAddDepartment() {
  this.newDepartment = {
    // id: this.newId,
    id: this.departmentService.getNewId(),
    name: this.departmentName,
    building: this.buildingID,
    employees: null
  };
  // this.newDepartment.employees = this.departmentService.getEmployeeList(this.newDepartment);
  this.departmentService.addToApiDepartment(this.newDepartment).subscribe(department => {
    this.depsAPI.push(department);
  });
  this.departmentService.addNewDepartment(this.newDepartment);
  this.departmentName = '';
  this.buildingID = '';
  this.departmentService.setNewId();
  this.getApiDepartments();
  this.refersh();
}

  constructor(private employeeService: EmployeeService, private departmentService: DepartmentService,
              public _router: Router, public _location: Location) { }

  ngOnInit() {
    this.getApiDepartments();
  }

  refersh(): void {
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

  getApiDepartments() {
    this.departmentService.getApiDepartments() .subscribe(deps => this.depsAPI = deps);
  }

/*   getEmployees(department: Department): Employee[] {
    return this.departmentService.getEmployeeList(department);
  } */

}
