import { Component, OnInit, Input, Output } from '@angular/core';
import {Employee} from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {
  search = '';
  searchEmployee: Employee;
  employees: Employee[] = [];



  formIsShowing: boolean;
  empsAPI: Employee[];
  onShowForm() {
    if (this.formIsShowing === false) {
      this.formIsShowing = true;
    } else {
      this.formIsShowing = false;
    }
  }
  getApiEmployees() {
    this.employeeService.getApiEmployees() .subscribe(emps => this.empsAPI = emps);
  }
    getSearchEmployee() {
    this.setSearchEmployee(this.search);
  }
  setSearchEmployee(search: string) {
    for (const i of this.empsAPI) {
      if ( search === i.first_name ) {
        this.searchEmployee = i;
      }
    }
  }
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.formIsShowing = false;
    this.getApiEmployees();
  }

}
