import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard-employee',
  templateUrl: './dashboard-employee.component.html',
  styleUrls: ['./dashboard-employee.component.css']
})
export class DashboardEmployeeComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;
  empsAPI: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    // this.getEmployees();
    this.getApiEmployees();
  }
  onRemoveEmployee(index) {
    this.employees.splice(index, 1);
  }
  getEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }
  getApiEmployees() {
    this.employeeService.getApiEmployees() .subscribe(emps => this.empsAPI = emps);
  }
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
}